// const Koa = require('koa');
// const app = new Koa();
// const router = require('koa-router')();
// const koaBody = require('koa-bodyparser')
// const xml2js = require('xml2js');
// var parser = new xml2js.Parser();
// var multer = require('@koa/multer');
//
// const storage = multer.diskStorage({ // multer调用diskStorage可控制磁盘存储引擎
//     destination: function(req, file, cb){
//         cb(null, './pic')
//     },
//     filename: function(req, file, cb){
//         // console.log(file);
//         const filenameArr = file.originalname.split('.');
//         cb(null, file.fieldname + '-' + Date.now()+'.'+filenameArr[filenameArr.length-1]) // 文件名使用cb回调更改，参数二是文件名，为了保证命名不重复，使用时间戳
//     }
// })
// const upload = multer({
//     storage
// })
//
// router.post('/users', koaBody(),
//     (ctx: { request: { body: any; }; body: any; }) => {
//     let data = ctx.request.body;
//
//         console.log(data.name);
//         // => POST body
//         ctx.body = ctx.request.body;
//     }
// );
// router.post('/test', koaBody(),
//     (ctx: { request: { body: any; }; body: string; }) => {
//         console.log(ctx.request.body);
//         // => POST body
//         ctx.body = JSON.stringify(ctx.request.body);
//     }
// );
// router.post('/xml', koaBody(),
//     (ctx: { request: { body: any; }; body: string; }) => {
//         const obj = parser(ctx.request.body);
//         ctx.body = `Request Body: ${JSON.stringify(obj)}`;
//     }
// );
// router.post(
//     '/upload',
//     upload.fields([
//         {
//             name: 'avatar',
//             maxCount: 1
//         },
//         {
//             name: 'na',
//             maxCount: 1
//         }
//     ]),
//     ctx => {
//         // console.log('ctx.request.files', ctx.request.files);
//         // console.log('ctx.files', ctx.files);
//         // console.log('ctx.request.body', ctx.request.body);
//         ctx.body = 'done';
//     }
// );
//
// app.use(router.routes());
//
// app.listen(3000);
// console.log('curl -i http://localhost:3000/users -d "name=test"');
