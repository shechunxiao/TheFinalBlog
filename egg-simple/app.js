module.exports = app => {
    app.once('server', server => {
        console.log('work进程')
        // websocket
    });
    app.on('error', (err, ctx) => {
        // report error
        console.log('发生错误了',err)
    });
    app.on('request', ctx => {
        // log receive request
        // console.log('我请求了')
    });
    app.on('response', ctx => {
        // ctx.starttime is set by framework
        // const used = Date.now() - ctx.starttime;
        // log total cost
    });
};
