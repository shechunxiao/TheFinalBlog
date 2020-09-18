'use strict';

const Controller = require('egg').Controller;

class CookieController extends Controller {
  // cookie默认是不能为汉字的,如果要设置成汉字，需要配置成加密
  async index() {
    const { ctx } = this;
    ctx.cookies.set('name','zhangsan');
    // console.log(this.app.config.env)
    ctx.body = 'hi, cookie';
  }
  async getcookie() {
    const { ctx } = this;
    console.log(ctx.cookies.get('name'));
    ctx.cookies.get('name');
    // console.log(this.app.config.env)
    ctx.body = 'cookie:'+ctx.cookies.get('name');
  }
}

module.exports = CookieController;
