'use strict';

const Controller = require('egg').Controller;

class SessionController extends Controller {

  async setsession() {
    const { ctx } = this;
    ctx.session.name='李四';
    // console.log(this.app.config.env)
    ctx.body = 'hi, session';
  }
  async getsession() {
    const { ctx } = this;
    // console.log(this.app.config.env)
    ctx.body = 'session:'+ctx.session.name;
  }
  async delsession() {
    const { ctx } = this;
    // console.log(this.app.config.env)
    ctx.session.name = null;
    ctx.body = 'session:'+ctx.session.name;
  }
}

module.exports = SessionController;
