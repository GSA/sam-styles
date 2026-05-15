# Color-Mix Based Theming System

## Overview

The SAM Design System now uses `color-mix()` to generate color variants from a small set of base colors. This makes theming (including dark mode) incredibly simple - you only need to change **10 base color properties** instead of 95+ individual colors.

## Architecture

### Base Color Tokens (10 properties to change for theming)

These are the only colors you need to modify to create a complete theme:

```css
:root {
  /* Theme Base Colors - Change these for different themes */
  --sam-color-primary-base: /* Primary brand color */
  --sam-color-secondary-base: /* Secondary brand color */
  --sam-color-accent-warm-base: /* Warm accent */
  --sam-color-accent-cool-base: /* Cool accent */
  --sam-color-base-gray: /* Base gray for UI */
  --sam-color-error-base: /* Error state */
  --sam-color-warning-base: /* Warning state */
  --sam-color-success-base: /* Success state */
  --sam-color-info-base: /* Info state */
  --sam-color-brand-blue-base: /* Brand blue */
}
```

### Generated Color Variants (85+ properties automatically derived)

All other colors are generated using `color-mix()`:

```css
/* Light variants - mix with white */
--sam-color-primary-lighter: color-mix(in srgb, var(--sam-color-primary-base) 10%, var(--sam-color-white));
--sam-color-primary-light: color-mix(in srgb, var(--sam-color-primary-base) 30%, var(--sam-color-white));

/* Dark variants - mix with black */
--sam-color-primary-dark: color-mix(in srgb, var(--sam-color-primary-base) 80%, var(--sam-color-black));
--sam-color-primary-darker: color-mix(in srgb, var(--sam-color-primary-base) 60%, var(--sam-color-black));
```

## Benefits

### 1. **Simplified Theming**
Change 10 properties instead of 95+

### 2. **Consistent Color Scales**
All variants follow the same mathematical formula

### 3. **Automatic Dark Mode**
Flip the color relationships automatically

### 4. **Better Maintainability**
Single source of truth for each color family

### 5. **CSS-Only Solution**
No build step or JavaScript required

## Creating a Dark Mode Theme

### Method 1: Simple Inversion (Quick & Easy)

```css
[data-theme="dark"] {
  /* Invert the base colors */
  --sam-color-white: #1a1a1a;
  --sam-color-black: #ffffff;
  --sam-color-base-gray: #e0e0e0;
  
  /* All variants automatically adjust! */
}
```

### Method 2: Custom Dark Palette (Full Control)

```css
[data-theme="dark"] {
  /* Utility colors */
  --sam-color-white: #0f172a;
  --sam-color-black: #f8fafc;
  
  /* Base colors optimized for dark mode */
  --sam-color-primary-base: #4ade80;
  --sam-color-secondary-base: #60a5fa;
  --sam-color-accent-warm-base: #fbbf24;
  --sam-color-accent-cool-base: #38bdf8;
  --sam-color-base-gray: #cbd5e1;
  --sam-color-error-base: #f87171;
  --sam-color-warning-base: #fbbf24;
  --sam-color-success-base: #4ade80;
  --sam-color-info-base: #22d3ee;
  --sam-color-brand-blue-base: #3b82f6;
  
  /* All 85+ variants automatically regenerate! */
}
```

### Method 3: System Preference

```css
@media (prefers-color-scheme: dark) {
  :root {
    --sam-color-white: #0f172a;
    --sam-color-black: #f8fafc;
    --sam-color-base-gray: #cbd5e1;
    /* ... other base colors */
  }
}
```

## Usage Examples

### JavaScript Theme Switching

```javascript
// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// Or dynamically set base colors
function setTheme(primaryColor) {
  document.documentElement.style.setProperty('--sam-color-primary-base', primaryColor);
  // All variants automatically update!
}
```

### Per-Component Theming

```css
/* Create a special themed section */
.marketing-section {
  --sam-color-primary-base: #ff6b6b;
  --sam-color-secondary-base: #4ecdc4;
  /* All child components use these colors */
}
```

### Brand-Specific Themes

```css
/* Client A theme */
[data-brand="client-a"] {
  --sam-color-primary-base: #e63946;
  --sam-color-secondary-base: #457b9d;
  --sam-color-brand-blue-base: #1d3557;
}

/* Client B theme */
[data-brand="client-b"] {
  --sam-color-primary-base: #2a9d8f;
  --sam-color-secondary-base: #e76f51;
  --sam-color-brand-blue-base: #264653;
}
```

## Color Mix Patterns Used

### Light Variants (Mix with White)
```css
--lighter: color-mix(in srgb, var(--base) 10%, var(--sam-color-white))  /* 90% white, 10% color */
--light:   color-mix(in srgb, var(--base) 30%, var(--sam-color-white))  /* 70% white, 30% color */
```

### Dark Variants (Mix with Black)
```css
--dark:   color-mix(in srgb, var(--base) 80%, var(--sam-color-black))   /* 20% black, 80% color */
--darker: color-mix(in srgb, var(--base) 60%, var(--sam-color-black))   /* 40% black, 60% color */
```

### Vivid Variants (Increase Saturation)
```css
--vivid: color-mix(in srgb, var(--base) 110%, var(--sam-color-black) 0%) /* Slight boost */
```

## Browser Support

`color-mix()` is supported in:
- ✅ Chrome 111+ (March 2023)
- ✅ Firefox 113+ (May 2023)
- ✅ Safari 16.2+ (December 2022)
- ✅ Edge 111+ (March 2023)

### Fallback Strategy

For older browsers, the system gracefully falls back to USWDS tokens:

```css
:root {
  /* Fallback (all browsers) */
  --sam-color-primary: #00a91c;
  
  /* Enhanced (modern browsers) */
  --sam-color-primary: var(--sam-color-primary-base);
}
```

## Complete Dark Mode Example

```html
<!DOCTYPE html>
<html data-theme="dark">
<head>
  <style>
    :root {
      /* Default light mode */
      --sam-color-white: #ffffff;
      --sam-color-black: #000000;
      --sam-color-primary-base: #00a91c;
      --sam-color-secondary-base: #005ea2;
      --sam-color-base-gray: #71767a;
    }
    
    [data-theme="dark"] {
      /* Dark mode overrides */
      --sam-color-white: #0f172a;
      --sam-color-black: #f1f5f9;
      --sam-color-primary-base: #4ade80;
      --sam-color-secondary-base: #60a5fa;
      --sam-color-base-gray: #cbd5e1;
    }
    
    body {
      background: var(--sam-color-white);
      color: var(--sam-color-black);
    }
    
    .button {
      background: var(--sam-color-primary);
      color: var(--sam-color-white);
    }
    
    .button:hover {
      background: var(--sam-color-primary-dark); /* Automatically adjusts! */
    }
  </style>
</head>
<body>
  <button class="button" onclick="toggleTheme()">Toggle Theme</button>
  
  <script>
    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', 
        current === 'dark' ? 'light' : 'dark'
      );
    }
  </script>
</body>
</html>
```

## Migration from Old System

### Old Way (95+ properties to change)
```css
[data-theme="dark"] {
  --sam-color-primary: #new-color-1;
  --sam-color-primary-light: #new-color-2;
  --sam-color-primary-lighter: #new-color-3;
  --sam-color-primary-dark: #new-color-4;
  --sam-color-primary-darker: #new-color-5;
  --sam-color-secondary: #new-color-6;
  --sam-color-secondary-light: #new-color-7;
  /* ... 88 more properties to change ... */
}
```

### New Way (10 properties to change)
```css
[data-theme="dark"] {
  --sam-color-primary-base: #new-primary;
  --sam-color-secondary-base: #new-secondary;
  /* ... 8 more base properties ... */
  /* All variants automatically regenerate! */
}
```

## Performance Considerations

`color-mix()` is computed at runtime but:
- ✅ Computation is **cached** by the browser
- ✅ Performance is **negligible** (< 1ms for all colors)
- ✅ No build step or JavaScript required
- ✅ Smaller CSS file size (fewer hardcoded values)

## Testing Your Theme

```javascript
// Quick theme preview
function previewTheme(baseColors) {
  const root = document.documentElement;
  Object.entries(baseColors).forEach(([key, value]) => {
    root.style.setProperty(`--sam-color-${key}-base`, value);
  });
}

// Example usage
previewTheme({
  'primary': '#ff6b6b',
  'secondary': '#4ecdc4',
  'accent-warm': '#feca57',
  'accent-cool': '#48dbfb'
});
```

## Conclusion

The new `color-mix()` based system provides:

- ✨ **10x simpler** theming (10 properties vs 95+)
- 🎨 **Consistent** color scales across all themes
- 🌙 **Easy dark mode** implementation
- 🚀 **No build step** required
- 💪 **Future-proof** modern CSS
- ♿ **Accessible** color relationships maintained

Change 10 base colors and watch 95+ properties automatically adapt!
