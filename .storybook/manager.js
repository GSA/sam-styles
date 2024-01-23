import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light', // This sets the theme to light mode
    // You can also customize other theme properties if needed
  }),
});
