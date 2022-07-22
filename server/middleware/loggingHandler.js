const express = require('express')
const app = express()
const winston = require('winston')
const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'warn'
        }),
        new winston.transports.File({
            level: 'error',
            // Create the log directory if it does not exist
            filename: 'logs/example.log'
        })
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `Label`
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    )
};
const logger = new winston.createLogger(logConfiguration)

module.exports = function logRequest(req, res, next) {
    logger.info(req.message)
    next()
}
// app.use(logRequest)

module.exports = function logError(err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            // custom application error
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            logger.error( res.status(statusCode).json({ message: err }));
        default:
            logger.error( res.status(500).json({ message: err.message }));
    }
}
// app.use(logError)

