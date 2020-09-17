module.exports = options => {
    return async function test(ctx, next) {
        console.log('这里是test中间件');
        await next();
    };
};
