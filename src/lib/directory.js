#!/bin/node
// v0.1.2
const fs = require('fs');
const x = "x"
function echo(path) {
    fs.readdir(path, (err, items) => {
        // while (items.length != 0) {
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
        // }
    });
}

module.exports.echo = echo;
