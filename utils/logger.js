var Logger = {};

var log4js = require('log4js');

log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./logs/app_log.log'), 'app_logg');

Logger = log4js.getLogger('app_logg');
Logger.setLevel('INFO');

module.exports = Logger;
