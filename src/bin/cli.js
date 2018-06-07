const dir = require("../lib/directory")
const fs = require('fs');
const meow = require('meow');

// use cli meow!

/*if (process.argv.length <= 2) {
    console.log("\nUsage: " + __filename + " <root-dir-path>\n");
    process.exit(-1);
} */

const cli = meow(`
    Usage
      $ sitemap-lcl <dir-path>

    Options
      --scan, -s Scan for

    Example
      $ sitemap-lcl -s ~/website
      Fetching sitemap! [===<=>===]
    `,{
        flags: {
            test: {
                type: 'boolean',
                alias: 't'
            }
        }
    }
);


if ( process.argv.length <= 2 ) {
  console.log( "SITEMAP-LCL \n Specify `--help` for available options." );
  process.exit(-1);
}

const tree = dir.tree(cli.input[0]);
