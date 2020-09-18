'use strict';

const Controller = require('egg').Controller;

class ValidateController extends Controller {
  async index() {
    const { ctx } = this;
    const params = ctx.query;
    console.log(params);
    this.ctx.validate({
      name:'email'
    },params);
    ctx.body = 'hi, validate';
  }
}

module.exports = ValidateController;
