'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const test = app.middleware.test({ threshold: 1024 });
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test',controller.home.test);
};
