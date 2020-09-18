'use strict';
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

class UploadController extends Controller {
    async fileUpload() {
        const { ctx } = this;
        const file = ctx.request.files[0];
        console.log(file);
        // const stream = await ctx.getFileStream();
        // console.log(stream);
        // const name = 'egg-multipart-test/'+path.basename(file.filename);
        // let result;
        // try{
        //
        // }finally {
        //
        // }
        // await sendToWormhole(stream);
        ctx.body = 'hi, upload';
    }
}

module.exports = UploadController;
