'use strict';

const Controller = require('egg').Controller;

class ModuleController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(this.app.config.env)
    let data = {
      name:'张三',
      age:11
    };
    await ctx.render('user.html',data);
    // ctx.body = '啥情况';
  }
  async error() {
    const { ctx } = this;
    // console.log(this.app.config.env)
    ctx.body = '出错了我擦';
  }
}

module.exports = ModuleController;
