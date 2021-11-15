"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const writeData = (file, data) => {
    fs.writeFile(`${file}`, JSON.stringify(data), (err) => {
        if (err) {
            console.log('Error writing file', err);
        }
        else {
            console.log('Successfully wrote file', JSON.stringify(data));
        }
    });
};
exports.default = writeData;
