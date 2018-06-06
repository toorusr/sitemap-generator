#!/bin/node
// v0.1.1
let fs = require('fs');


if (process.argv.length <= 2) {
    console.log("\nUsage: " + __filename + " <root-dir-path>\n");
    process.exit(-1);
}

let printTree = (path) => {
    fs.readdir(path, (err, items) => {
        while (items.length != 0) {
            for (let i=0; i<items.length; i++) {
                let file = path + '/' + items[i]
                fs.stat(file, function(f) {
                    return function(err, stats) {
                       console.log("[" + stats.isFile() + "]\t: " + f);
                       if (stats.isFile() === false) {
                           // let dir = path + '/' + items[i]
                           fs.readdir(file, (err, items) => {
                               console.log(items);
                           });
                       }
                    }
                }(file));
            }
        }
    });
}

let path = process.argv[2];
printTree(path)
