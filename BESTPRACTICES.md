-# SASS/CSS Coding Best Practices

- No inline-styling in the HTML
  - _Readability_
    - **Having a style in SCSS sheet with keep with single responsibility**
  - _High level of specificity_
    - _can unintentionally overwrite other styles_
  - _Easier to work with in console_
  - _Aren't reusable_
  - **Use a BEM class with a modifier instead**
- Airbnb [https://github.com/airbnb/css](https://github.com/airbnb/css)
  - Comments
    - Code that isn't self-documenting:
      - _Uses of z-__index_
      - _Compatibility_ _or browser-specific hacks_
    - Write on their own line
  - Use **@include** or **@mixin** instead of **@extend**
    - **@extend** has unintended consequences and usually best to avoid
- 18F [https://engineering.18f.gov/css/](https://engineering.18f.gov/css/)
  - Avoid using IDs for styling
    - _This prevents target confusion and allows CSS devs and JS devs to co-exist in the same code in peace._
    - _Easier to work with in console_
    - _IDs aren't reusable_
    - _Unnecessarily high level of specificity_
  - Avoid nesting more than 3 levels
    - _Overly dependent on HTML structure_
    - _Not reusable_
    - _High level of specificity_
  - Use !important very sparingly and never to fix problems
  - Naming
    - Use [BEM](http://getbem.com/) ([also see CSS Tricks](https://css-tricks.com/bem-101/))
    - No camelCasing
    - Name for function **not** appearance
  - Units
    - **em** : use for positioning
    - **percentages:** layouts so components stay relational
    - **rem:** for font sizes with **px** fall back
  - File formatting
  - Can deviate from example below but try to be consistent throughout for readability
    1. variables
    2. @extend directives
    3. @include directives
    4. declaration list (property: name;)
    5. media queries
    6. pseudo-states (:checked, :target, etc.) and pseudo-elements (::after, ::selection, etc.)
    7. nested elements
    8. nested classes
_Can deviate from example below but try to be consistent throughout for readability_
- Grid Systems
  - Do not nest containers
    - Containers are meant to be parent of grid system so should only be added to the body once. Everything else should be done with rows and columns (grid-row, grid-col)
  - Rows should be direct parent elements of columns
    - **Put grid rows and columns before child components in templates**
      - Won't interrupt grid row/column relationship with child component
      - Easier to reuse components since they won'