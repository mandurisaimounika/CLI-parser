import writeData from "../read-and-write/writeFile";
import * as fs from 'fs';

jest.mock('fs');

describe('write-file', () => {
    it('should call the writeFile function in fs', () => {
        let inputData = [{
            timestamp: 1628475171253,
            loglevel: 'error',
            transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
            err: 'Not found'
          }];
        let inputFile = '../errors.json';
        writeData(inputFile, inputData);
        expect(fs.writeFile).toBeCalledTimes(1);
    });
});