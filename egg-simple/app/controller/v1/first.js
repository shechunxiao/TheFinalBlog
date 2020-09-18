'use strict';

const Controller = require('egg').Controller;

class FirstController extends Controller {
    async index() {
        const { ctx } = this;
        // console.log(this.app.config.env)
        ctx.body = 'hi, first';
    }

    async form() {
        const { ctx } = this;
        console.log(ctx.request.body);
        console.log(ctx.query);
        // 表单验证这一块属于插件
        // const createRule = {
        //     username: {
        //         type: 'number',
        //     },
        //     password: {
        //         type: 'password',
        //     },
        // };
        // ctx.validate(createRule);
        ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
    }
    async myredirect() {
        const { ctx } = this;
        let id = ctx.params.id
        if(id>5){
            ctx.redirect('/test');
        }else{
            ctx.redirect('/');
        }

    }
    async search() {
        const { ctx } = this;
        console.log(ctx.query);
        ctx.body = '大写咯';
    }
}

module.exports = FirstController;
