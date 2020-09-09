"use strict";
// import Koa from 'koa'
// import Router from 'koa-router' // 路由
// // import BodyParser from 'koa-bodyparser'; //解析post传递的数据
// const koaBody = require('koa-body');
// import {myLogger} from '../common/mylogger' // 日志
//
//
// const app = new Koa();
// const router = new Router({
//     // prefix: '/rout'
// });
// app.use(koaBody());
// router.post('/test',(ctx, next) => {
//
//         // console.log(ctx);
//         // myLogger.debug(ctx.query);
//         // myLogger.debug(ctx.params);
//         //     // myLogger.debug(ctx);
//         // myLogger.debug(ctx.request);
//         //     ctx.body = ctx.request.ip
//         ctx.body = JSON.stringify(ctx.body);
//     })
//     .get('/users', (ctx, next) => {
//         // ...
//         ctx.body = 'Hello World! users';
//     })
//     .all('/allm',(ctx, next)=>{
//         ctx.body = "这里是all方法";
//     })
//     .get('/name', (ctx, next) => {
//         // ...
//         ctx.redirect(router.url('myuser', 10));
//     });
// router.get('myuser', '/myusers/:id', (ctx, next) => {
//     // ...
//     ctx.body = '命名路由'+ctx.params.id;
// });
// // router.url('myuser', 3);
// // router.redirect('/login', '/test');
// // // app.use(ctx => {
// // //     myLogger.debug(ctx);
// // //     ctx.body = 'Hello Koa';
// // // });
// // const url = Router.url('/users/:id', {id: 1});
// // console.log(router.route('myuser'));    //查看某个路由的详细信息
// app.use(router.routes()).use(router.allowedMethods({
//     throw: false,
//     notImplemented:()=>{
//         myLogger.debug('没有实现的方法');
//     },
//     methodNotAllowed: () => {
//         myLogger.debug('没有允许的方法');
//     }
// }));
//
// app.listen(3000);
// myLogger.debug("服务器已启动");
