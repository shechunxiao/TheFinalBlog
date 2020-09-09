"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myLogger = void 0;
var log4js = __importStar(require("log4js"));
var LoggerInitedType;
(function (LoggerInitedType) {
    LoggerInitedType[LoggerInitedType["CONSOLE"] = 1] = "CONSOLE";
    LoggerInitedType[LoggerInitedType["NORMAL"] = 2] = "NORMAL";
})(LoggerInitedType || (LoggerInitedType = {}));
var MyLogger = /** @class */ (function () {
    function MyLogger() {
        this.mainLogger = {};
    }
    MyLogger.getInstance = function () {
        if (!this._instance) {
            this._instance = new MyLogger();
            this._instance.initConsole();
        }
        return this._instance;
    };
    MyLogger.prototype.initialize = function (config) {
        if (this.initedType == LoggerInitedType.NORMAL) {
            return;
        }
        this.initedType = LoggerInitedType.NORMAL;
        log4js.configure(config);
        this.mainLogger = log4js.getLogger();
    };
    MyLogger.prototype.initConsole = function () {
        var config = {
            appenders: {
                out: {
                    type: 'console'
                }
            },
            categories: {
                default: {
                    appenders: ['out'],
                    level: 'all'
                }
            }
        };
        log4js.configure(config);
        this.mainLogger = log4js.getLogger();
        this.initedType = LoggerInitedType.CONSOLE;
    };
    MyLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.mainLogger.isWarnEnabled()) {
            return;
        }
        this.mainLogger.warn(this.writeLog(args));
    };
    MyLogger.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.mainLogger.isTraceEnabled()) {
            return;
        }
        this.mainLogger.trace(this.writeLog(args));
    };
    MyLogger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.info.apply(this, args);
    };
    MyLogger.prototype.fatal = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.mainLogger.isFatalEnabled()) {
            return;
        }
        this.mainLogger.fatal(this.writeLog(args));
    };
    MyLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.mainLogger.isErrorEnabled()) {
            return;
        }
        this.mainLogger.error(this.writeLog(args));
    };
    MyLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.mainLogger.isInfoEnabled()) {
            return;
        }
        this.mainLogger.info(this.writeLog(args));
    };
    MyLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.mainLogger.isDebugEnabled()) {
            return;
        }
        this.mainLogger.debug(this.writeLog(args));
    };
    MyLogger.prototype.writeLog = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.initedType) {
            console.log('error: ', 'logger is not inited');
        }
        var str = '';
        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            if (i > 0) {
                str += ' ';
                if (typeof arg == 'object') {
                    str += JSON.stringify(arg);
                }
                else {
                    str += arg;
                }
            }
            else {
                if (typeof arg == 'object') {
                    str = JSON.stringify(arg);
                }
                else {
                    str = arg;
                }
            }
        }
        return str;
    };
    return MyLogger;
}());
var myLogger = MyLogger.getInstance();
exports.myLogger = myLogger;
