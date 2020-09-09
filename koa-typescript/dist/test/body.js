"use strict";
var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')();
var koaBody = require('koa-bodyparser');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
router.post('/users', koaBody(), function (ctx) {
    var data = ctx.request.body;
    console.log(data.name);
    // => POST body
    ctx.body = ctx.request.body;
});
router.post('/test', koaBody(), function (ctx) {
    console.log(ctx.request.body);
    // => POST body
    ctx.body = JSON.stringify(ctx.request.body);
});
router.post('/xml', koaBody(), function (ctx) {
    var obj = parser(ctx.request.body);
    ctx.body = "Request Body: " + JSON.stringify(obj);
});
app.use(router.routes());
app.listen(3000);
console.log('curl -i http://localhost:3000/users -d "name=test"');
