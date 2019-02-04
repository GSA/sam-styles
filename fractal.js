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
components.set('default.preview', '@preview');

// use Nunjucks as the templating engine
const nunjucks = require('@frctl/nunjucks')({
  filters: {
    stackblitz: function(d) {
      return d + 'hello';
    }
  }
});

components.engine(nunjucks); 


// =============================================================================
// DOCUMENTATION
// =============================================================================
const docs = fractal.docs;
docs.set('path', __dirname + '/src/docs');


// =============================================================================
// WEB UI
// =============================================================================
const mandelbrot = require('@frctl/mandelbrot');

const themeConfig = {
  skin: "white",
  panels: ["html", "view", "context", "resources", "info", "notes"],
  static: {
    mount: 'dist',
  },
  scripts: [
    "default",
    "https://unpkg.com/@stackblitz/sdk/bundles/sdk.umd.js"
  ]
}

const samTheme = mandelbrot(themeConfig);

samTheme.addStatic(__dirname + '/dist', `/${themeConfig.static.mount}`);

// specify a directory to hold the theme override templates
samTheme.addLoadPath(__dirname + '/theme-overrides');  

fractal.web.theme(samTheme);

// output files to /build
fractal.web.set('builder.dest', 'build');

module.exports = fractal;