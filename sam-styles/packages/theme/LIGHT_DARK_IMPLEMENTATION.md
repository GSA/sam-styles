# Light-Dark Mode Implementation Guide

## Current Status: Light Mode Only (Dark Mode Prepared)

The SAM Design System is **prepared for dark mode** using the `light-dark()` CSS function, but currently only light mode is active. This makes enabling dark mode in the future a simple one-line change.

## Architecture

### Current Setup (Light Mode Only)

```css
:root {
  /* Only light mode is active */
  color-scheme: light;
  
  /* Colors are prepared with light-dark() but only light values are used */
  --sam-color-white: light-dark(#ffffff, #0f172a);
  --sam-color-black: light-dark(#000000, #f1f5f9);
  --sam-color-primary-base: light-dark(#00a91c, #4ade80);
  /* ... etc */
}
```

**Result:** Only the first (light) value is used. Dark values are ignored.

## How light-dark() Works

The `light-dark()` function automatically chooses the correct value based on `color-scheme`:

```css
/* Syntax */
property: light-dark(<light-value>, <dark-value>);

/* When color-scheme: light */
--color: light-dark(#ffffff, #000000); /* Uses #ffffff */

/* When color-scheme: light dark */
--color: light-dark(#ffffff, #000000); /* Uses #ffffff or #000000 based on preference */

/* When color-scheme: dark */
--color: light-dark(#ffffff, #000000); /* Uses #000000 */
```

## Enabling Dark Mode (Future)

### Step 1: Change color-scheme (One Line!)

```scss
// In custom-properties.scss
:root {
  // Change this line:
  color-scheme: light;
  
  // To this:
  color-scheme: light dark;
  
  // That's it! Dark mode is now enabled.
}
```

### Step 2: (Optional) Fine-tune Dark Values

All dark color values are already defined in the `light-dark()` functions. You can adjust them if needed:

```scss
// Example: Adjust dark mode primary color
--sam-color-primary-base: light-dark(
  #{color('green-cool-20v')},  // Light mode (current)
  #50e080                       // Dark mode (adjust as needed)
);
```

## Benefits of This Approach

### 1. **Zero Breaking Changes**
- Current light mode works exactly as before
- No visual changes until dark mode is enabled

### 2. **One-Line Activation**
- Change `color-scheme: light` to `color-scheme: light dark`
- Entire system switches to dark mode support

### 3. **System Preference Ready**
- When enabled, automatically respects user's OS setting
- No JavaScript required

### 4. **Future-Proof**
- Dark colors already defined and ready
- Easy to test and adjust before going live

### 5. **Consistent Implementation**
- All colors follow the same pattern
- Easy to maintain and update

## Testing Dark Mode (Before Going Live)

### Method 1: Temporary Override

```css
/* Add this temporarily to test dark mode */
:root {
  color-scheme: light dark;
}

/* Force dark mode for testing */
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
  }
}
```

### Method 2: Dev Tools

Most browsers let you emulate dark mode:
1. Open DevTools
2. Open Command Palette (Cmd/Ctrl + Shift + P)
3. Type "dark" and select "Emulate CSS prefers-color-scheme: dark"

### Method 3: Test Class

```scss
// Add a test class
.test-dark-mode {
  color-scheme: dark;
}
```

```html
<!-- Test on specific element -->
<div class="test-dark-mode">
  <!-- Dark mode colors will apply here -->
</div>
```

## Current Color Definitions

All base colors are prepared with light-dark():

```scss
:root {
  color-scheme: light; // Only light active for now
  
  // Utility colors
  --sam-color-white: light-dark(#ffffff, #0f172a);
  --sam-color-black: light-dark(#000000, #f1f5f9);
  
  // Brand colors (10 base colors)
  --sam-color-primary-base: light-dark(#00a91c, #4ade80);
  --sam-color-secondary-base: light-dark(#005ea2, #60a5fa);
  --sam-color-accent-warm-base: light-dark(#ffbe2e, #fbbf24);
  --sam-color-accent-cool-base: light-dark(#00bde3, #38bdf8);
  --sam-color-base-gray: light-dark(#71767a, #cbd5e1);
  --sam-color-error-base: light-dark(#e52207, #f87171);
  --sam-color-warning-base: light-dark(#ffbe2e, #fbbf24);
  --sam-color-success-base: light-dark(#00a91c, #4ade80);
  --sam-color-info-base: light-dark(#00bde3, #22d3ee);
  --sam-color-brand-blue-base: light-dark(#0a3466, #3b82f6);
  
  // All variants generated via color-mix() automatically adapt!
}
```

## How Variants Adapt Automatically

Because variants use `color-mix()` with the base colors:

```scss
// This variant automatically uses the correct base color
--sam-color-primary-light: color-mix(
  in srgb, 
  var(--sam-color-primary-base) 30%,  // Uses light or dark base
  var(--sam-color-white)               // Uses light or dark white
);
```

**When light mode:**
- `--sam-color-primary-base` = `#00a91c` (light green)
- `--sam-color-white` = `#ffffff`
- Result: Light green tint

**When dark mode (after enabling):**
- `--sam-color-primary-base` = `#4ade80` (bright green)
- `--sam-color-white` = `#0f172a` (dark background)
- Result: Bright green that works on dark background

## Browser Support

`light-dark()` is supported in:
- ✅ Chrome 123+ (March 2024)
- ✅ Firefox 120+ (November 2023)
- ✅ Safari 17.5+ (May 2024)
- ✅ Edge 123+ (March 2024)

**Current coverage:** ~85% of users

### Fallback Strategy

For older browsers without `light-dark()` support, the first (light) value is used as a fallback:

```css
/* Modern browsers: uses light-dark() */
--color: light-dark(#ffffff, #000000);

/* Fallback for older browsers: uses light value */
--color: #ffffff;
```

This means older browsers will always see light mode, which is acceptable for now.

## Migration Checklist (When Ready for Dark Mode)

- [ ] Review all dark color values in `custom-properties.scss`
- [ ] Test dark mode in all major browsers
- [ ] Test all components in dark mode
- [ ] Verify accessibility (contrast ratios) in dark mode
- [ ] Check images/icons work in dark mode
- [ ] Test with system dark mode preference
- [ ] Update documentation
- [ ] **Change `color-scheme: light` to `color-scheme: light dark`**
- [ ] Deploy and monitor

## Advantages Over Other Approaches

### vs. Manual Theme Switching
```css
/* Other approaches require: */
[data-theme="dark"] {
  --sam-color-primary: #...;
  --sam-color-secondary: #...;
  /* ... 95+ properties to override ... */
}

/* Our approach: Already built-in */
:root {
  color-scheme: light dark; /* One line change */
}
```

### vs. CSS Media Queries
```css
/* Other approaches require: */
@media (prefers-color-scheme: dark) {
  :root {
    --sam-color-primary: #...;
    --sam-color-secondary: #...;
    /* ... 95+ properties to duplicate ... */
  }
}

/* Our approach: No duplication needed */
/* light-dark() handles it automatically */
```

### vs. Separate Stylesheets
```html
<!-- Other approaches require: -->
<link rel="stylesheet" href="light.css" media="(prefers-color-scheme: light)">
<link rel="stylesheet" href="dark.css" media="(prefers-color-scheme: dark)">

<!-- Our approach: Single stylesheet, automatic switching -->
<link rel="stylesheet" href="styles.css">
```

## Future Enhancements (After Dark Mode Launch)

1. **User Toggle**
   ```javascript
   // Override system preference
   document.documentElement.style.colorScheme = 'dark';
   ```

2. **Per-Component Themes**
   ```css
   .special-section {
     color-scheme: dark; /* Force dark mode here */
   }
   ```

3. **Scheduled Themes**
   ```javascript
   // Auto-switch based on time of day
   const hour = new Date().getHours();
   if (hour < 6 || hour > 18) {
     document.documentElement.style.colorScheme = 'dark';
   }
   ```

4. **Custom Color Schemes**
   ```css
   :root {
     color-scheme: light dark sepia; /* Add custom schemes */
   }
   ```

## Summary

✅ **Current:** Light mode only, working perfectly  
✅ **Prepared:** All dark colors defined and ready  
✅ **Future:** One-line change enables full dark mode  
✅ **Automatic:** System preference support built-in  
✅ **Maintainable:** Single source of truth for all colors  
✅ **No Risk:** Zero breaking changes until enabled  

**To enable dark mode in the future:**
```diff
:root {
-  color-scheme: light;
+  color-scheme: light dark;
}
```

That's it! 🎉
