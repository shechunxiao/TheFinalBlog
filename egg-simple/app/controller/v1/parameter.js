'use strict';

const Controller = require('egg').Controller;

class ParameterController extends Controller {
    async index() {
        const { ctx } = this;
        console.log(ctx.query); //query是如果一个参数出现多次，只取第一次出现的值(get传参)
        console.log(ctx.queries); //queries如果一个参数出现多次，放到一个数组中去(get传参)
        console.log(ctx.params); //这里是获取的路由上定义的参数(路由定义的参数)
    }
    async body2() {
        const { ctx } = this;
        console.log(ctx.request.body); //POST、PUT 和 DELETE等方法传递的参数
    }
    async header2() {
        const { ctx } = this;
        console.log(ctx.headers); // 读取headers中的数据
        console.log('user-agent:'+ctx.get('user-agent'));
        console.log('host:'+ctx.host);
        console.log('protocol:'+ctx.protocol);
        console.log('ips:'+ctx.ips);
        console.log('ip:'+ctx.ip);
        ctx.body = "这里是headers测试";
    }
}

module.exports = ParameterController;
