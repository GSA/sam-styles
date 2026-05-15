# CSS Custom Properties Implementation

This document describes the CSS custom properties (CSS variables) implementation in the SAM Design System.

## Overview

The design system now uses CSS custom properties following best practices to provide:
- **Runtime theming**: Values can be changed dynamically via JavaScript
- **Better browser DevTools support**: Easier to debug and inspect
- **Cascade support**: Values inherit through the DOM
- **Scoped overrides**: Can be overridden at any level
- **Better performance**: No need to recompile SCSS for theme changes

## File Structure

### `/packages/theme/custom-properties.scss`
This is the main file that defines all CSS custom properties. It:
- Imports USWDS core functions
- Defines all custom properties on `:root`
- Converts USWDS tokens to CSS custom properties
- Organizes properties by category

### Categories of Custom Properties

#### 1. Colors (`--sam-color-*`)
All color tokens from the design system, organized by:
- **Base colors**: Gray scale (`--sam-color-base`, `--sam-color-base-light`, etc.)
- **Primary colors**: Main brand colors (`--sam-color-primary`, `--sam-color-primary-dark`, etc.)
- **Secondary colors**: Secondary brand colors
- **Accent colors**: Warm and cool accents
- **State colors**: Error, warning, info, success
- **Semantic colors**: Link colors, disabled states

Example usage:
```scss
.my-component {
  background-color: var(--sam-color-primary);
  color: var(--sam-color-white);
}
```

#### 2. Spacing (`--sam-spacing-*`)
Standardized spacing values based on USWDS units:
- `--sam-spacing-05` through `--sam-spacing-10`
- Based on the USWDS spacing scale

Example usage:
```scss
.my-component {
  padding: var(--sam-spacing-2);
  margin-bottom: var(--sam-spacing-3);
}
```

#### 3. Borders (`--sam-border-*`)
Border widths and radius values:
- **Widths**: `--sam-border-width-1px`, `--sam-border-width-2px`
- **Radius**: `--sam-border-radius-sm`, `--sam-border-radius-md`, `--sam-border-radius-lg`, `--sam-border-radius-pill`

Example usage:
```scss
.my-component {
  border: var(--sam-border-width-2px) solid var(--sam-color-primary);
  border-radius: var(--sam-border-radius-md);
}
```

#### 4. Shadows (`--sam-shadow-*`)
Box shadow values:
- `--sam-shadow-button`: Standard button shadow
- `--sam-shadow-1`: Light shadow
- `--sam-shadow-2`: Medium shadow

#### 5. Typography (`--sam-font-*`)
Font-related properties:
- **Weights**: `--sam-font-weight-thin` through `--sam-font-weight-bold`
- **Sizes**: `--sam-font-size-2xs` through `--sam-font-size-10`
- **Line heights**: `--sam-line-height-1` through `--sam-line-height-3`

Example usage:
```scss
.my-component {
  font-weight: var(--sam-font-weight-semibold);
  font-size: var(--sam-font-size-md);
}
```

#### 6. Component-specific Values
Pre-calculated values for common component needs:
- **Buttons**: Padding, min-width, circle sizes
- **Focus states**: Outline offset and width
- **Menus**: Min-width values

Example usage:
```scss
.my-button {
  padding: var(--sam-button-padding-y) var(--sam-button-padding-x);
  min-width: var(--sam-button-min-width);
}
```

#### 7. Transitions (`--sam-transition-*`)
Standard transition timing:
- `--sam-transition-fast`: 0.1s ease-out
- `--sam-transition-base`: 0.2s ease-out
- `--sam-transition-slow`: 0.3s ease-out

Example usage:
```scss
.my-component {
  transition: all var(--sam-transition-base);
}
```

#### 8. Z-index (`--sam-z-index-*`)
Standardized z-index values:
- `--sam-z-index-modal`: 1000
- `--sam-z-index-overlay`: 900
- `--sam-z-index-dropdown`: 800
- `--sam-z-index-sticky`: 100

## Best Practices

### 1. Use CSS Custom Properties for Runtime Values
Use CSS custom properties for values that might need to change at runtime or be overridden in specific contexts.

### 2. Keep SCSS Variables for Build-Time Logic
SCSS variables are still useful for:
- Complex calculations at build time
- Conditional logic with `@if`, `@each`, etc.
- Generating multiple selectors

### 3. Naming Convention
- All custom properties use the `--sam-` prefix
- Follow the pattern: `--sam-[category]-[descriptor]-[variant]`
- Examples: `--sam-color-primary-light`, `--sam-spacing-2`, `--sam-border-radius-md`

### 4. Backwards Compatibility
Many SCSS variables have been updated to reference CSS custom properties:
```scss
// Old approach (still works)
$button-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);

// New approach
$button-shadow: var(--sam-shadow-button);
```

This allows existing code to continue working while gradually adopting the new system.

### 5. Scope Overrides When Needed
CSS custom properties can be overridden at any scope:
```scss
.dark-theme {
  --sam-color-primary: #different-color;
  --sam-color-background: #1a1a1a;
}
```

### 6. Use with Fallbacks for Critical Values
For critical values, provide fallbacks:
```scss
.my-component {
  color: var(--sam-color-primary, #00a91c);
}
```

## Migration Guide

### Converting Existing SCSS

**Before:**
```scss
.my-button {
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);
}
```

**After:**
```scss
.my-button {
  background-color: var(--sam-color-white);
  padding: var(--sam-spacing-2) var(--sam-spacing-4);
  border-radius: var(--sam-border-radius-button);
  box-shadow: var(--sam-shadow-button);
}
```

### Gradual Adoption

The system is designed for gradual adoption:
1. SCSS variables now reference CSS custom properties
2. Update components one at a time
3. Both approaches work during transition
4. USWDS utility classes still work as before

## Browser Support

CSS custom properties are supported in:
- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+
- All modern browsers

For IE11, consider a PostCSS plugin to convert custom properties to static values for production builds.

## JavaScript Access

CSS custom properties can be accessed and modified via JavaScript:

```javascript
// Get a value
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--sam-color-primary');

// Set a value
document.documentElement.style
  .setProperty('--sam-color-primary', '#new-color');
```

## Further Reading

- [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Custom Properties Best Practices](https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/)
- [USWDS Documentation](https://designsystem.digital.gov/)
