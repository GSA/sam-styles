## How to use

Sam-styles icons are designed to be used with FontAwesome, so all [styling options](https://fontawesome.com/how-to-use/on-the-web/styling) (rotation, animation, transforms, layering, etc.) are also available in sam-styles.

To use sam-styles icons, you need to know two bits of information to reference an icon.
1. its name, prefixed with `fa-` and
2. the style's prefix for sam-styles

```html
<i class="sds fa-bell"></i> <!-- this icon's name is `bell` and sam-styles prefix is 'sds' -->
```

If using icons in place they need a specific list add the class ```fa-fw```

### Semantic
If icons aren't decorative they will need a title attribute and alternate text inside a sibling element. For more information see [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)
