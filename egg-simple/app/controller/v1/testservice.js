'use strict';

const Controller = require('egg').Controller;

class TestserviceController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(this.app.config.env)
    let data = await this.service.user.find();
    console.log(data);
    ctx.body = data;
    // ctx.body = 'hi, service';
  }
}

module.exports = TestserviceController;
