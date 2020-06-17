Layer 2 to 4 Font Awesome icons

## Types
For basic use (centering one icon on top of another) use `stack`.

### Stack
This will place one center one icon in the other. For regularly sized icon use class `fa-stack-1x` and for larger icon include class `fa-stack-2x`. For more information refer to see [Font Awesome Stacking](https://fontawesome.com/how-to-use/on-the-web/styling/stacking-icons).
**Font Awesome recently introduced layers so there is a risk that stack becomes depreciated**

### Layers
For more complex use (more than 2 icons or icon not centered) use `layers`.
This will enable more than 2 icons, icons that should be nested off center. However, doing so will require setting data-transform in at least one of the icons for correct placement.
*Make sure icons in array are ordered from bottom to top.*
For more information refer to see [Font Awesome Layering](https://fontawesome.com/how-to-use/on-the-web/styling/layering).
___
### Variables
- **icons:** Array of up to 4 ***@icon*** components using Font Awesome regular and solid libraries
- **type:**
  - stack *(default)*
  - layers
- **size:** Font Awesome size of icons **excluding `fa-`** *(defaults to 2x)*
