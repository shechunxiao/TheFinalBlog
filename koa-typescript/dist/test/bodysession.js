const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const koaBody = require('koa-bodyparser');
const xml2js = require('xml2js');
const fs = require('fs');
var parser = new xml2js.Parser();
var multer = require('@koa/multer');
const session = require('koa-session');
const myerror = require('koa-onerror');
const logger = require('koa-logger');
const webstatic = require('koa-static');
const helmet = require("koa-helmet");
const cors = require('koa2-cors');
// 设置安全
app.use(helmet());
// 解决跨域问题
app.use(cors());
// 错误配置
myerror(app);
app.use(logger()); //在控制台输出请求日志
// 集中处理一些其他的错误
app.use(async (ctx, next) => {
    await next();
    if (ctx.status == 404) {
        ctx.status = 404;
        ctx.body = '404';
    }
});
// 上传配置
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './pic');
    },
    filename: function (req, file, cb) {
        // console.log(file);
        const filenameArr = file.originalname.split('.');
        cb(null, file.fieldname + '-' + Date.now() + '.' + filenameArr[filenameArr.length - 1]); // 文件名使用cb回调更改，参数二是文件名，为了保证命名不重复，使用时间戳
    }
});
const upload = multer({
    storage
});
// session配置
const CONFIG = {
    key: 'koa.sess',
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 20000000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
    secure: false,
    sameSite: null,
};
app.keys = ['6f5e362288cdf27b3b4b3afca18e054acff20d88'];
app.use(session(CONFIG, app));
// 静态文件路径配置
app.use(webstatic('../../static/'));
router.get('/ajax', (ctx) => {
    ctx.body = '啥情况';
});
router.get('/index', (ctx) => {
    console.log(new Date().toLocaleTimeString());
    // console.log(ctx.session.isLogin);
    if (ctx.session.isLogin) {
        ctx.body = '已经登录了';
    }
    else {
        ctx.body = '需要登录';
        // ctx.redirect('/login');
    }
});
router.get('/login', (ctx) => {
    ctx.session.isLogin = true;
    console.log(ctx.session.isLogin);
    ctx.body = ctx.session.isLogin;
});
router.post('/users', koaBody(), (ctx) => {
    let data = ctx.request.body;
    console.log(data.name);
    // => POST body
    ctx.body = ctx.request.body;
});
router.post('/test', koaBody(), (ctx) => {
    console.log(ctx.request.body);
    // => POST body
    ctx.body = JSON.stringify(ctx.request.body);
});
router.post('/xml', koaBody(), (ctx) => {
    const obj = parser(ctx.request.body);
    ctx.body = `Request Body: ${JSON.stringify(obj)}`;
});
router.post('/upload', upload.fields([
    {
        name: 'avatar',
        maxCount: 1
    },
    {
        name: 'na',
        maxCount: 1
    }
]), ctx => {
    // console.log('ctx.request.files', ctx.request.files);
    // console.log('ctx.files', ctx.files);
    // console.log('ctx.request.body', ctx.request.body);
    ctx.body = 'done';
});
router.post('/json', koaBody(), (ctx) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});

app.use(router.routes());
app.listen(3000);
console.log('curl -i http://localhost:3000/users -d "name=test"');
