const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        // const user = await this.ctx.db.query('select * from user where uid = ?', uid);
        // return user;
        let obj = {
            name:'张三',
            age:11
        };
        return obj;
    }
    async getFirst(id){
        const data = await this.app.mysql.get('first', { id: id });
        return data;
    }
    async insertData(){
        const data = await this.app.mysql.insert('first',{name:'插入数据'});
        return data;
    }
    async allData(){
        const data = await this.app.mysql.select('first',{
            limit:2
        });
        return data;
    }
    async updateData(){
        const data = await this.app.mysql.update('first',{
            id:1,
            name:'我这里是更改的数据'
        });
        return data;
    }
    async delData(){
        const data = await this.app.mysql.delete('first',{
            id:6
        });
        return data;
    }
    async dealData(){
        const conn = await this.app.mysql.beginTransaction();
        try{
            await conn.insert('first',{
                name:"事务"
            });
            await conn.delete('first',{
                id:4
            });
            await conn.commit();
            return '成功';
        }catch (e) {
            await conn.rollback();
            throw e;
        }
        return data;
    }
    async dealDataScope(){
        const result = await this.app.mysql.beginTransactionScope(async conn=>{
            await conn.insert('first',{
                name:'事务scope'
            });
            await conn.update('first',{
                id:10,
                name:this.app.mysql.literals.now
            });
            return 'scope成功'
        },this.ctx);
        return result;
    }

}

module.exports = UserService;
