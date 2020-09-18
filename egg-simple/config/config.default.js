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
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
