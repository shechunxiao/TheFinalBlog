import Koa from 'koa'
import Router from 'koa-router' // 路由
import BodyParser from 'koa-bodyparser'; //解析post传递的数据
import {myLogger} from '../common/mylogger' // 日志
var multer = require('@koa/multer');


const app = new Koa();

const storage = multer.diskStorage({
    destination:'./'+new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate(),
    filename(ctx: any, file: { originalname: string; }, cb: (arg0: null, arg1: string) => void){
        const filenameArr = file.originalname.split('.');
        cb(null,Date.now() + '.' + filenameArr[filenameArr.length-1]);
    }
});

const upload = multer({storage});
const router = new Router({
    // prefix: '/rout'
});
app.use(BodyParser());

router.post('/test',(ctx, next) => {

        // console.log(ctx);
        // myLogger.debug(ctx.query);
        // myLogger.debug(ctx.params);
        //     // myLogger.debug(ctx);
        // myLogger.debug(ctx.request);
        //     ctx.body = ctx.request.ip
        ctx.body = ctx.request.body
    })
    .get('/users', (ctx, next) => {
        // ...
        ctx.body = 'Hello World! users';
    })
    .all('/allm',(ctx, next)=>{
        ctx.body = "这里是all方法";
    })
    .get('/name', (ctx, next) => {
        // ...
        ctx.redirect(router.url('myuser', 10));
    });

router.get('myuser', '/myusers/:id', (ctx, next) => {
    // ...
    ctx.body = '命名路由'+ctx.params.id;
});
router.post('/upload',upload.single('avatar'),async (ctx) => {

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
    notImplemented:()=>{
        myLogger.debug('没有实现的方法');
    },
    methodNotAllowed: () => {
        myLogger.debug('没有允许的方法');
    }
}));

app.listen(3000);
myLogger.debug("服务器已启动");
