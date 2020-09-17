'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(this.app.config.env)
    ctx.body = 'hi, egg';
  }
  async test() {
    const { ctx } = this;
    await ctx.helper.formatUser()
    await this.app.logger.info('记录');
    ctx.body = '测试body';
  }
}

module.exports = HomeController;
