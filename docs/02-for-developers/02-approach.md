## Extending the USWDS

### Theme

SAM-Styles is a theme of USWDS. We follow the `theme` folder structure found in `USWDS`. These files only include overriden variables. This allows a better understanding of what configurations are different from the default theme.

```
stylesheets/
├── theme/
│   ├── _sds-theme-color.scss
│   ├── _sds-theme-components.scss
│   ├── _sds-theme-custom-styles.scss
│   ├── _sds-theme-general.scss
│   ├── _sds-theme-spacing.scss
│   ├── _sds-theme-typography.scss
│   ├── _sds-theme-utilities.scss
│   ├── styles.scss
```

### USWDS Components

When there is a need to override parts of a `USWDS` component. We create an specific scss file for that component, save it in the appropiate folder(components, elments or layouts) and declare it in `theme/_sds-theme-custom-styles.scs`

```
stylesheets/
├── components/
├── elements/
├── layouts/
├── theme/
```

### SDS Components

When USWDS does not provide a needed UI. A new component its created following the same process as the above section. The only difference is that this new component will have the `sds` prefix instead of `usa`. For example:

```
sds-dialog
```


