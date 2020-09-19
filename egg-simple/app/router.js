'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // router.verb('path-match', app.controller.action);
  // router.verb('router-name', 'path-match', app.controller.action);
  // router.verb('path-match', middleware1, ..., middlewareN, app.controller.action);
  // router.verb('router-name', 'path-match', middleware1, ..., middlewareN, app.controller.action);
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test',controller.home.test);
  router.redirect('/re','/test'); // 直接重定向
  router.get('/first',controller.v1.first.index);
  router.post('/form',controller.v1.first.form);
  router.get('/myredirect',controller.v1.first.myredirect);
  router.get('/search', app.middleware.uppercase(), controller.v1.first.search) //中间件参数变成大写
  router.get('/parameter/:parm',controller.v1.parameter.index);
  router.post('/body2',controller.v1.parameter.body2);
  router.get('/header2',controller.v1.parameter.header2);
  router.post('/upload',controller.v1.upload.fileUpload);
  router.get('/cookie',controller.v1.cookie.index);
  router.get('/getcookie',controller.v1.cookie.getcookie);
  router.get('/setsession',controller.v1.session.setsession);
  router.get('/getsession',controller.v1.session.getsession);
  router.get('/delsession',controller.v1.session.delsession);
  router.get('/validate',controller.v1.validate.index);
  router.get('/http',controller.v1.http.index);
  router.get('/service',controller.v1.testservice.index); //学习service
  router.get('/module',controller.v1.module.index);
  router.get('/50x',controller.v1.module.error);
  router.get('/info',controller.v1.info.userinfo);
  // 挂载鉴权路由
  app.passport.mount('github');

  // 上面的 mount 是语法糖，等价于
  // const github = app.passport.authenticate('github', {});
  // router.get('/passport/github', github);
  // router.get('/passport/github/callback', github);




};
