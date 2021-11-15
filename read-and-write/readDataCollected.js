"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogObject = void 0;
const writeFile_1 = require("./writeFile");
const createLogObject = (logValues) => {
    let format = {
        timestamp: new Date(`${logValues[0]}`).getTime(),
        loglevel: logValues[1],
        transactionId: logValues[2].transactionId,
        err: logValues[2].err
    };
    return format;
};
exports.createLogObject = createLogObject;
const readData = (data, file) => {
    let log = data.split('\n');
    let array = [];
    for (const i in log) {
        let logValues = log[i].split(' - ');
        if (log[i].includes('- error -')) {
            logValues[2] = JSON.parse(logValues[2]);
            let logObject = (0, exports.createLogObject)(logValues);
            array.push(logObject);
        }
    }
    array.length > 1 ? (0, writeFile_1.default)(file, array) : null;
};
exports.default = readData;
