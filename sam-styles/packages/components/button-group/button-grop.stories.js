export default {
  title: "Components/ButtonGroup",
};
const Template = () => {
  return `<ul class="sds-button-group sds-button-group--segmented">
  <li class="sds-button-group__item">
      <button class="usa-button">Reports</button>
  </li>
  <li class="sds-button-group__item">
      <button class="usa-button usa-button--outline">Subscriptions</button>
  </li>
  <li class="sds-button-group__item">
      <button class="usa-button usa-button--outline">History</button>
  </li>
</ul>

<ul class="sds-button-group--secondary sds-button-group--segmented">
  <li class="sds-button-group__item">
      <button class="usa-button">Reports</button>
  </li>
  <li class="sds-button-group__item">
      <button class="usa-button usa-button--outline">Subscriptions</button>
  </li>
  <li class="sds-button-group__item">
      <button class="usa-button usa-button--outline">History</button>
  </li>
</ul>
`;
};

export const ButtonGroup = Template.bind({});