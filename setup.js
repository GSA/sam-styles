const path = require("path");
const copy = require('copy');

const sep = path.sep; // OS-specific path separator
const nodeModulesDir = sep + 'node_modules';
const resolved = path.resolve(__dirname);
let appRootPath = null;

// if node_modules exists in the path, just split __dirname
// else just use __dirname as the app root path
if( -1 !== resolved.indexOf(nodeModulesDir)) {
  appRootPath = resolved.split(nodeModulesDir)[0];
} else {
  appRootPath = resolved;
}

const src = sep + 'src';
const fonts = sep + 'fonts';
const img = sep + 'img';
const all_files = sep + '**' + sep + '*.*';
const uswds = 'uswds';
const uwswds_src = appRootPath + nodeModulesDir + sep + uswds + src;

// Copy USWDS fonts to source folder
copy(`${uwswds_src + fonts + all_files}`, `.${src + fonts}`, function(err, files) {
  if (err) throw err;
});

// Copy USWDS images to source folder
copy(`${uwswds_src + img + all_files}`, `.${src + img}`, function(err, files) {
  if (err) throw err;
});