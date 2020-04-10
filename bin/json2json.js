#!/usr/bin/env node            
const json2Json = require('../json2json.js');                               

    var func = require(process.cwd()+'/'+process.argv[2]);
    process.argv = process.argv.slice(0,1).concat(process.argv.slice(2));
    json2Json(func);
