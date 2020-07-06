"use strict";
const path = require("path");
const fractal = require("@frctl/fractal").create();
const mandelbrot = require("@frctl/mandelbrot");
const pkg = require("./package.json");

fractal.set('project.title', `SAM Styles (v${pkg.version})`);
fractal.set('project.version', `v${pkg.version}`);
fractal.set('project.author', 'GSA Integrated Award Environment');
fractal.components.set('default.collator', function(markup, item) {
  return '<!-- Start: @' + item.handle + ' -->\n<strong>' + (item.label || item.name) + '</strong>' + markup + '<hr/>\n<!-- End: @' + item.handle + ' -->\n';
});

// =============================================================================
// COMPONENTS
// =============================================================================
const components = fractal.components;
components.set("ext", ".njk");
components.set("path", __dirname + "/src/components");
components.set("default.preview", "@sam");

// use Nunjucks as the templating engine
const nunjucks = require("@frctl/nunjucks")({
  paths: ["src/components"],
  filters: {
    setAttribute: function setAttribute(dictionary, key, value) {
      dictionary[key] = value;
      return dictionary;
    }
  },
  globals: {
    push: function push(array, item) {
      return array.push(item);
    }
  }
});

components.engine(nunjucks);

// =============================================================================
// DOCUMENTATION
// =============================================================================
fractal.docs.set("path", __dirname + "/docs");

// =============================================================================
// WEB UI
// =============================================================================

const themeConfig = {
  skin: "white",
  nav: ["docs", "components"],
  panels: ["html", "notes", "resources"],
  styles: ["default", "/theme.css"],
  scripts: ["default", "/theme.js"]
};

const sdsTheme = mandelbrot(themeConfig);

sdsTheme.addLoadPath(__dirname + "/theme-overrides");

fractal.web.theme(sdsTheme);

fractal.web.set("static.path", path.join(__dirname, "public"));

/**
 * Federalist
 * output files to /_site
 * https://federalist.18f.gov/pages/using-federalist/supported-site-engines/#requirements
 */
fractal.web.set("builder.dest", "_site");

/**
 * Server configuration
 */
fractal.web.set("server.port", 4000);
fractal.web.set("server.sync", true);

/**
 * Prevent Bluebird warnings like "a promise was created in a handler but was not returned from it"
 * caused by Nunjucks from polluting the console
 */
const bluebird = require('bluebird');
bluebird.config({
  warnings: false
});


module.exports = fractal;