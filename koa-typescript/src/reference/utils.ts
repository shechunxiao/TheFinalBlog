import * as FileSystem from 'fs';
import * as XML2JS from 'xml2js';
import * as Crypto from 'crypto';
/// <reference path="../../index.d.ts" />
import * as THREE from 'three';
import { IColAABB } from '../module/gameinterface';
import { ConstDegToRad } from '../module/gameconst';

class Utils {
    static readConfig(name: string, ext: string='.conf'): any {
        let conFile = FileSystem.readFileSync(`./conf/${name}${ext}`, 'utf8');
        if (conFile == null) {
            return null;
        }
        return JSON.parse(conFile);
    }

    static reverseMap(mapData: Map<any, any>) {
        let reverseData = new Map<any, any>();
        mapData.forEach((value, key) => {
            reverseData.set(value, key);
        }, this);
        return reverseData;
    };

    static async getJSObject(file: string) {
        let xmlData = <string>FileSystem.readFileSync(file, "utf-8");

        return new Promise<any>((resolve, reject) => {
            XML2JS.parseString(xmlData, (err: Error, jsonData: any) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(jsonData);
                }
            });
        });
    }

    static checkNumber(strObj: string): boolean {
        return !isNaN(Number(strObj));
    }

    static readDir(filepath: string, extName: string='xml', fileList:Array<string>=null): Array<string> {
        let pa = FileSystem.readdirSync(filepath);
        if (fileList==null) {
            fileList = new Array<string>();
        }
        pa.forEach((element, index) => {
            let info = FileSystem.statSync(`${filepath}/${element}`);
            if (info.isDirectory()) {
                this.readDir(`${filepath}/${element}`, extName, fileList);
            } else {
                if (element.toLowerCase().endsWith(extName)) {
                    fileList.push(`${filepath}/${element}`);
                }
            }
        });
        return fileList;
    }

    static randNumber(min: number, max: number): number {
        return Math.floor((max - min) * Math.random() + min + 0.5);
    }

    static md5(data: string) {
        let md5Generate = Crypto.createHash("md5");
        md5Generate.update(data);
        return md5Generate.digest('hex');
    }

    static isZero(vector: THREE.Vector3): boolean {
        if (vector.x == 0 && vector.y == 0 && vector.z == 0) {
            return true;
        }
        return false;
    }

    static ifSphereImpact(s1: THREE.Sphere, s2: THREE.Sphere): boolean {
        return s1.intersectsSphere(s2);
    }

    static ifImpactExt(sphere: THREE.Sphere, aabb: IColAABB): boolean {
        let dist = 0;
        let v = sphere.center.x;
        if (v < aabb.min.x) {
            dist += (aabb.min.x - v) * (aabb.min.x - v);
        }
        if (v > aabb.max.y) {
            dist += (v - aabb.max.y) * (v - aabb.max.y);
        }
        v = sphere.center.z;
        if (v < aabb.min.y) dist += (aabb.min.y - v) * (aabb.min.y - v);
		if (v > aabb.max.y) dist += (v - aabb.max.y) * (v - aabb.max.y);
        return dist < sphere.radius * sphere.radius;
    }

    static ifImpact(crsPos1: THREE.Vector3, radius1: number, crsPos2: THREE.Vector3, radius2: number){
        let miniImpactDist = radius1 +radius2;
        let tempPos = crsPos2.clone();
        tempPos = tempPos.sub(crsPos1);
        tempPos.z = 0;
        if (Math.abs(tempPos.x) + Math.abs(tempPos.y) + Math.abs(tempPos.z) <= miniImpactDist){
            return true;
        }
        let length = tempPos.length();
        if (length <= miniImpactDist){
            return true;
        }
        return false;
    }

    static ifInTheSameBlock(x1: number, y1: number, x2: number, y2: number) {
        return  Math.floor(x1/100) == Math.floor(x2/100) && Math.floor(y1/100) == Math.floor(y2/100);
    }

    static rotateXZBy(curDir: THREE.Vector3, degrees: number, center: THREE.Vector3 = new THREE.Vector3) {
		degrees *= ConstDegToRad;
		let cs = Math.cos(degrees);
		let sn = Math.sin(degrees);
		curDir.x -= center.x;
		curDir.z -= center.z;
		let tTempX = curDir.x;
		let tTempZ = curDir.z;
		curDir.x = tTempX * cs - tTempZ * sn;
		curDir.z = tTempX * sn + tTempZ * cs;
		curDir.x += center.x;
		curDir.z += center.z;
    }
}

export default Utils;