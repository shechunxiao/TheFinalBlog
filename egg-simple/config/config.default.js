/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600324030541_9587';
  config.cluster = {
    listen :{
      port: 3000,
      hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
      // path: '/var/run/egg.sock',
    }
  };
  // add your middleware config here
  config.middleware = ['test'];
  config.test ={
    match: '/test',
  };
  config.security = {
    csrf: false
  };
  config.multipart = {
    mode: 'file',
    fileExtensions: [ '.apk' ] // 增加对 apk 扩展名的文件支持
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
    mapping: {
      '.html': 'nunjucks',
    },
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '152.136.123.214',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'scxmdrslb',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.onerror= {
    // 线上页面发生异常时，重定向到这个页面上
    errorPageUrl: '/50x',
  };
  // 第三方登录
  config.passportGithub = {
    key: 'your_clientID',
    secret: 'your_clientSecret',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  };
  // 静态资源，没搞懂

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
