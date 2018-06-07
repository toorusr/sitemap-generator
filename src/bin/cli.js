const dir = require("../lib/directory")
const fs = require('fs');
// use cli meow!

if (process.argv.length <= 2) {
    console.log("\nUsage: " + __filename + " <root-dir-path>\n");
    process.exit(-1);
}



let tree = dir.echo(process.argv[2]);
