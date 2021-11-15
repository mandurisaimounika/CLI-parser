import writeData from './writeFile';
import LogObject from './logObject';

export const createLogObject = (logValues: any): LogObject => {
    let format: LogObject = {
        timestamp: new Date(`${logValues[0]}`).getTime(),
        loglevel: logValues[1],
        transactionId: logValues[2].transactionId,
        err: logValues[2].err
    };
    return format;
}

const readData = (data: string, file: string): void => {
    let log = data.split('\n');
    let array: Array<LogObject> = [];
    for(const i in log) {
            let logValues = log[i].split(' - ');
            
            if(log[i].includes('- error -')) {
                logValues[2] = JSON.parse(logValues[2]);
                let logObject = createLogObject(logValues);
                array.push(logObject);
            }
    }
    array.length > 1 ? writeData(file, array) : null;
}

export default readData;