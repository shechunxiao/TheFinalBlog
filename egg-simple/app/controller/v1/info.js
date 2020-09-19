'use strict';

const Controller = require('egg').Controller;

class InfoController extends Controller {
  async userinfo() {
    const { ctx } = this;
    // console.log(this.app.config.env)
    let id = ctx.query.id;
    console.log(id);
    // const user = await ctx.service.user.getFirst(id);
    // const user = await ctx.service.user.insertData();
    // const user = await ctx.service.user.allData();
    // const user = await ctx.service.user.updateData();
    // const user = await ctx.service.user.delData();
    const user = await ctx.service.user.dealDataScope();
    console.log(user);
    ctx.body = user;
  }

}

module.exports = InfoController;
