'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
    validate : {
        enable: true,
        package: 'egg-validate',
    },
    nunjucks : {
        enable: true,
        package: 'egg-view-nunjucks',
    },
    mysql : {
        enable: true,
        package: 'egg-mysql',
    },
    passport : {
        enable: true,
        package: 'egg-passport',
    },
    passportGithub : {
        enable: true,
        package: 'egg-passport-github',
    }
};
