const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const koaBody = require('koa-bodyparser')
const xml2js = require('xml2js');
var parser = new xml2js.Parser();

router.post('/users', koaBody(),
    (ctx: { request: { body: any; }; body: any; }) => {
    let data = ctx.request.body;

        console.log(data.name);
        // => POST body
        ctx.body = ctx.request.body;
    }
);
router.post('/test', koaBody(),
    (ctx: { request: { body: any; }; body: string; }) => {
        console.log(ctx.request.body);
        // => POST body
        ctx.body = JSON.stringify(ctx.request.body);
    }
);
router.post('/xml', koaBody(),
    (ctx: { request: { body: any; }; body: string; }) => {
        const obj = parser(ctx.request.body);
        ctx.body = `Request Body: ${JSON.stringify(obj)}`;
    }
);

app.use(router.routes());

app.listen(3000);
console.log('curl -i http://localhost:3000/users -d "name=test"');
