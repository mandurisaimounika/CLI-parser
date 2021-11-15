#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const readDataCollected_1 = require("./read-and-write/readDataCollected");
const yargs = require('yargs');
const options = yargs
    .usage("Usage: -i <inputFile> -o <outputFile>")
    .option("i", { alias: "inputFile", describe: "Give input File", type: "string", demandOption: true })
    .option("o", { alias: "outputFile", describe: "Give output File", type: "string", demandOption: true })
    .argv;
(0, fs_1.readFile)(`${options.i}`, 'utf-8', function (err, data) {
    if (err) {
        throw err;
    }
    else {
        (0, readDataCollected_1.default)(data, options.o);
    }
});
