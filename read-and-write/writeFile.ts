import * as fs from 'fs';
import LogObject from './logObject';

const writeData = (file: string, data: Array<LogObject>): void => {     
    fs.writeFile(`${file}`, JSON.stringify(data), (err) => {
        if(err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file', JSON.stringify(data));
        }
      });
}

export default writeData;