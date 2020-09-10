"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router")); // 路由
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser")); //解析post传递的数据
const mylogger_1 = require("../common/mylogger"); // 日志
var multer = require('@koa/multer');
const app = new koa_1.default();
const storage = multer.diskStorage({
    destination: './' + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate(),
    filename(ctx, file, cb) {
        const filenameArr = file.originalname.split('.');
        cb(null, Date.now() + '.' + filenameArr[filenameArr.length - 1]);
    }
});
const upload = multer({ storage });
const router = new koa_router_1.default({
// prefix: '/rout'
});
app.use(koa_bodyparser_1.default());
router.post('/test', (ctx, next) => {
    // console.log(ctx);
    // myLogger.debug(ctx.query);
    // myLogger.debug(ctx.params);
    //     // myLogger.debug(ctx);
    // myLogger.debug(ctx.request);
    //     ctx.body = ctx.request.ip
    ctx.body = ctx.request.body;
})
    .get('/users', (ctx, next) => {
    // ...
    ctx.body = 'Hello World! users';
})
    .all('/allm', (ctx, next) => {
    ctx.body = "这里是all方法";
})
    .get('/name', (ctx, next) => {
    // ...
    ctx.redirect(router.url('myuser', 10));
});
router.get('myuser', '/myusers/:id', (ctx, next) => {
    // ...
    ctx.body = '命名路由' + ctx.params.id;
});
router.post('/upload', upload.single('avatar'), async (ctx) => {
});
// router.post(
//     '/upload',
//     upload.single('avatar'),
//     ctx => {
//         console.log('ctx.request.file', ctx.request.file);
//         console.log('ctx.file', ctx.file);
//         console.log('ctx.request.body', ctx.request.body);
//         ctx.body = 'done';
//     }
// );
// router.url('myuser', 3);
// router.redirect('/login', '/test');
// // app.use(ctx => {
// //     myLogger.debug(ctx);
// //     ctx.body = 'Hello Koa';
// // });
// const url = Router.url('/users/:id', {id: 1});
// console.log(router.route('myuser'));    //查看某个路由的详细信息
app.use(router.routes()).use(router.allowedMethods({
    throw: false,
    notImplemented: () => {
        mylogger_1.myLogger.debug('没有实现的方法');
    },
    methodNotAllowed: () => {
        mylogger_1.myLogger.debug('没有允许的方法');
    }
}));
app.listen(3000);
mylogger_1.myLogger.debug("服务器已启动");
