"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readDataCollected_1 = require("../read-and-write/readDataCollected");
const writeFile_1 = require("../read-and-write/writeFile");
// jest.mock('writeData', () => jest.fn());
jest.mock('../read-and-write/writeFile');
describe('read-data-collected', () => {
    it('should create a log object', () => {
        let input = ['2021-08-09T02:12:51.253Z', 'error', { "transactionId": "9abc55b2-807b-4361-9dbe-aa88b1b2e978", "details": "Cannot find user orders list", "code": 404, "err": "Not found" }];
        let output = {
            timestamp: 1628475171253,
            loglevel: 'error',
            transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
            err: 'Not found'
        };
        expect((0, readDataCollected_1.createLogObject)(input)).toStrictEqual(output);
    });
    it('should call the writeData function', () => {
        let inputData = `${'2021-08-09T02:12:51.265Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"Service is successfully finished"}\n2021-08-10T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}\n2021-08-11T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}\n2021-08-12T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}'}`;
        let inputFile = 'errors.json';
        (0, readDataCollected_1.default)(inputData, inputFile);
        expect(writeFile_1.default).toBeCalledTimes(1);
    });
});
