#!/usr/bin/env node
import { readFile } from 'fs';
import readData from './read-and-write/readDataCollected';
const yargs = require('yargs');

const options = yargs
                .usage("Usage: -i <inputFile> -o <outputFile>")
                .option("i", { alias: "inputFile", describe: "Give input File", type: "string", demandOption: true })
                .option("o", { alias: "outputFile", describe: "Give output File", type: "string", demandOption: true })
                .argv;

readFile(`${options.i}`, 'utf-8', function(err, data){
    if(err) {
        throw err;
    } else {
        readData(data, options.o);
    }
});
