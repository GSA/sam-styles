export default {
  title: "Components/ButtonGroup",
  argTypes: {
    class: {type: "string"},
  },
};
const AlertTemplate = (args) => {
  return `<ul class="usa-button-group ${args.class}">
  
    <li class="usa-button-group__item">
       <button class="usa-button">Map</button>
    </li>
 <li class="usa-button-group__item">
      <button class="usa-button usa-button--outline">Satellite</button>
    </li>
 <li class="usa-button-group__item">
      <button class="usa-button usa-button--outline">Hybrid</button>
    </li>
 
</ul>

`;
};
const Template = (args) => {
  return `<ul class="usa-button-group">
  <li class="usa-button-group__item">
    <a href="javascript:void(0);" class="usa-button usa-button--outline">
      Back
    </a>
  </li>
  <li class="usa-button-group__item">
    <button class="usa-button">Continue</button>
  </li>
</ul>`;
};

export const Default = Template.bind({});
Default.args = {
  class: "",
};

export const Segmented = AlertTemplate.bind({});
Segmented.args = {
  class: "usa-button-group--segmented",
};
