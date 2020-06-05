## About
Above are all the Sam Styles icons. Font Awesome's free regular and solid icons are also available. A list of these are available [here](https://fontawesome.com/icons?d=gallery&s=regular,solid&m=free).

## How to use
Sam Styles icons are designed to be used with Font Awesome, so all [styling options](https://fontawesome.com/how-to-use/on-the-web/styling) (rotation, animation, transforms, layering, etc.) are also available in sam-styles.

To use sam-styles icons, you need to know two bits of information to reference an icon.
1. its name, prefixed with `fa-` and
2. the style's prefix for sam-styles

```html
<i class="sds fa-bell"></i> <!-- this icon's name is `bell` and sam-styles prefix is 'sds' -->
```

If using icons in place they need a specific list add the class ```fa-fw```

### Semantic
If icons aren't decorative they will need a title attribute and alternate text inside a sibling element. For more information see [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)

### Variables
- **icon:** icon name *(ie: book)*
- **prefix *(optional)*:** icon library
 - sds *(default)*: SAM custom icons **shown above**
 - fas: font-awesome solid
 - far: font-awesome regular
- **classes *(optional)*:** additional classes as string such as `text-\{{uswds color token}}` to set icon color
- **title *(optional)*:** title/description for screen readers *(see Semantic section)*
- **dataTransform *(optional)*:** Use of Font Awesome data-transform property *(see above)*