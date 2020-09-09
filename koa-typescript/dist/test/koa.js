"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router")); // 路由
// import BodyParser from 'koa-bodyparser'; //解析post传递的数据
var koaBody = require('koa-body');
var mylogger_1 = require("../common/mylogger"); // 日志
var app = new koa_1.default();
var router = new koa_router_1.default({
// prefix: '/rout'
});
app.use(koaBody());
router.post('/test', function (ctx, next) {
    console.log(ctx);
    mylogger_1.myLogger.debug(ctx.query);
    mylogger_1.myLogger.debug(ctx.params);
    // myLogger.debug(ctx);
    mylogger_1.myLogger.debug(ctx.request);
    ctx.body = ctx.request.ip;
})
    .get('/users', function (ctx, next) {
    // ...
    ctx.body = 'Hello World! users';
})
    .all('/allm', function (ctx, next) {
    ctx.body = "这里是all方法";
})
    .get('/name', function (ctx, next) {
    // ...
    ctx.redirect(router.url('myuser', 10));
});
router.get('myuser', '/myusers/:id', function (ctx, next) {
    // ...
    ctx.body = '命名路由' + ctx.params.id;
});
router.url('myuser', 3);
router.redirect('/login', '/test');
// app.use(ctx => {
//     myLogger.debug(ctx);
//     ctx.body = 'Hello Koa';
// });
var url = koa_router_1.default.url('/users/:id', { id: 1 });
// console.log(router.route('myuser'));    //查看某个路由的详细信息
app.use(router.routes()).use(router.allowedMethods({
    throw: false,
    notImplemented: function () {
        mylogger_1.myLogger.debug('没有实现的方法');
    },
    methodNotAllowed: function () {
        mylogger_1.myLogger.debug('没有允许的方法');
    }
}));
app.listen(3000);
mylogger_1.myLogger.debug("服务器已启动");
