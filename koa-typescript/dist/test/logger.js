"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mylogger_1 = require("../common/mylogger");
// let config: Configuration = {
//     appenders: {
//         out: {
//             type: 'file',
//             filename:'daochu.txt'
//         }
//     },
//     categories: {
//         default: {
//             appenders: ['out'],
//             level: 'all'
//         }
//     }
// };
// myLogger.initialize(config);
// myLogger.warn('小P');
// myLogger.trace('打');
// myLogger.log('苏');
// myLogger.fatal('粪');
// myLogger.error('非');
// myLogger.info('常');
// myLogger.debug('好');
mylogger_1.myLogger.debug(['1', '张三'], ['test', true]);