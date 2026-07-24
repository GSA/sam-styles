We recommend implementing **sam-styles** with `npm`, but we also provide a direct download if `npm` will not work for your project.

- [Download sam-styles](#download)
- [Use NPM](#npm)

<a name="download"></a>

## Download

- Dowload [sam-styles zip file](https://github.com/GSA/sam-styles/releases/download/v0.0.20/sam-styles-0.20.0.zip) from the latest SAM-Styles release.

You should see the following file and folder structure:

```
 sam-styles-0.20.0/
 ├── css/
 │ ├── sds.min.css.map
 │ ├── sds.min.css
 │ └── sds.css
 ├── fonts/
 ├── icons/
 │ ├── icons.js
 │ ├── index.js
 │ └── ...
 ├── img/
 ├── js/
 │  ├── sds.min.js.map
 │  ├── sds.min.js
 │  ├── sds.js
 │  ├── uswds.min.js.map
 │  ├── uswds.min.js
 │  └── uswds.js
 └── scss/
```

- Download [FontAwesome](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself) javascript files

- Copy these files and folders into a relevant place in your project’s code base. Here is an example structure for how this might look:

```
 example-project/
 ├── assets/
 │   ├── sam-styles-0.20.0/
 │   ├── stylesheets/
 │   ├── images/
 │   └── javascript/
 │       └── FontAwesome/
 │           ├── brands.min.js
 │           ├── fontawesome.min.js
 │           ├── regular.min.js
 │           └── solid.min.js
 └── index.html
```

You’ll notice in our example above that we also outline a `stylesheets`, `images` and `javascript` folder in your assets folder. These folders are to help organize any assets that are unique to your project and separate from the design system assets.

- Reference the CSS and JavaScript files in each HTML page or dynamic templates in your project.

Here an example of how to reference these assets your `index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>My Example Project</title>
    <link rel="stylesheet" href="assets/sam-styles-0.20.0/css/sds.min.css" />

    <!-- Icons -->
    <script defer src="assets/javascript/FontAwesome/brands.min.js"></script>
    <script defer src="assets/javascript/FontAwesome/regular.min.js"></script>
    <script defer src="assets/javascript/FontAwesome/solid.min.js"></script>
    <script defer src="assets/javascript/sam-styles-0.20.0/icons.js"></script>
    <script
      defer
      src="assets/javascript/FontAwesome/fontawesome.min.js"
    ></script>
  </head>
  <body>
    <script src="assets/sam-styles-0.20.0/js/uswds.min.js"></script>
    <script src="assets/sam-styles-0.20.0/js/sds.min.js"></script>
  </body>
</html>
```

We offer both the CSS and the JavaScript in two versions — minified and un-minified. (In the examples above, we are using the minified files.) Use the minified files in a production environment or to reduce the file size of your downloaded assets. Use the un-minified files if you are in a development environment or would like to debug the CSS or JavaScript assets in the browser.

<a name="npm"></a>

## Using NPM

We recommend implementing **sam-styles** with `npm`, follow steps 1 -- 3 from [USWDS](https://designsystem.digital.gov/documentation/developers/#install-using-npm) then run the following command to add `sam-styles` to your project's `package.json`:

```
npm install --save @gsa-sam/sam-styles
```

The `sam-styles` module is now installed as a dependency. The package ships uncompiled SCSS sources — you compile them as part of your own build. The published contents are:

```
node_modules/@gsa-sam/sam-styles/
└── sam-styles/
    ├── index.scss        # main entry point (forwards USWDS + all packages)
    └── packages/
        ├── ...           # component, pattern, and branding partials
        └── images/       # SVG/PNG assets referenced by the SCSS via url()
```

`@use` the entry point from your project's SCSS. Because `@gsa-sam/sam-styles` `@forward`s USWDS, make sure the USWDS load path is available to your Sass compiler (see the USWDS steps above):

```scss
@use "@gsa-sam/sam-styles";
```

You can also reach individual partials directly if you only need a subset:

```scss
@use "@gsa-sam/sam-styles/packages/components/...";
```

**Assets:** Some styles reference images (e.g. `landing-hero.png`, `arrow-down.svg`) via `url()`, resolved through the `$sam-image-path` Sass variable defined in `sam-styles/packages/theme/variables.scss`. The package ships these images under `sam-styles/packages/images/` so the references have a real target inside the package.

Because `$sam-image-path` defaults to a relative path (`../sam-styles/packages/images`), the generated `url()` values are resolved by the **browser at runtime relative to your compiled CSS**, not by Sass at build time. In practice you should make the bundled images available at a matching path in your served output — for example, copy `node_modules/@gsa-sam/sam-styles/sam-styles/packages/images/` into your build's asset pipeline so the `url()` references resolve in the browser.

**Note:** We do not recommend directly editing sam-styles files in `node_modules`. One of the benefits of using a package manager is its ease of upgrade and installation. If you make customizations to the files in the package, any upgrade or re-installation will wipe them out.

For integration and customization details follow [USWDS](https://designsystem.digital.gov/documentation/developers/#using-the-uswds-package) recomendations.
