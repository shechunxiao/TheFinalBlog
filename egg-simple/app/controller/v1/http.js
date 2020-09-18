'use strict';

const Controller = require('egg').Controller;

class HttpController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.status = 500;
    // ctx.body = '<html><div style="background: red">http</div></html>';
    // const result = await ctx.curl('https://www.swiper.com.cn/demo/index.html', {
    //   streaming: true,
    // });
    // ctx.set(result.header);
    // // result.res 是一个 stream
    // ctx.body = result.res;
    // ctx.set('Date','2019-09-10'); // 这里是设置header头部参数的方法
    // ctx.body = "http";
    ctx.redirect('https://www.swiper.com.cn/demo/index.html')
  }
}

module.exports = HttpController;
