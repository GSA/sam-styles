

const copy = require('copy');


copy('**/node_modules/uswds/dist/fonts/**/*.*', './src/fonts', function(err, files) {
  if (err) throw err;
  // `files` is an array of the files that were copied
});
copy('**/node_modules/uswds/dist/img/**/*.*', './src/img', function(err, files) {
  if (err) throw err;
  // `files` is an array of the files that were copied
});