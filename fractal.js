'use strict';

const pkg = require('./package.json');
const fractal = require('@frctl/fractal').create();

fractal.set('project.title', `SAM Styles (v${pkg.version})`);
fractal.set('project.version', `v${pkg.version}`);

// =============================================================================
// COMPONENTS
// =============================================================================
const components = fractal.components;
components.set('ext', '.njk');
components.set('path', __dirname + '/src/components');
components.set('default.preview', '@sam');

// use Nunjucks as the templating engine
const nunjucks = require('@frctl/nunjucks')({
  filters: {
    // stackblitz: function(d) {
    //   return d + 'hello';
    // }
  },
  paths: [
    'src/components',
  ]
});

components.engine(nunjucks); 


// =============================================================================
// DOCUMENTATION
// =============================================================================
const docs = fractal.docs;
docs.set('path', __dirname + '/docs');


// =============================================================================
// WEB UI
// =============================================================================
const mandelbrot = require('@frctl/mandelbrot');

const themeConfig = {
  skin: "white",
  nav: ['docs', 'components'],
  panels: ["html", "notes", "resources"],
  scripts: [
    "default",
    // "https://unpkg.com/@stackblitz/sdk/bundles/sdk.umd.js"
  ]
}

const samTheme = mandelbrot(themeConfig);
samTheme.addLoadPath(__dirname + '/theme-overrides');  

const web = fractal.web;

web.theme(samTheme);

web.set('static.path', 'dist');
web.set('static.mount', 'dist');

// output files to /_site
// https://federalist.18f.gov/pages/using-federalist/supported-site-engines/#requirements
web.set('builder.dest', '_site');

module.exports = fractal;