export default {
  title: "Components/ProcessList",
};
const Template = () => {
  return `<ol class="usa-process-list">
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Start a process</h4>
    <p class="margin-top-05">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque.</p>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.</li>
      <li>Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.</li>
      <li>Aliquam erat volutpat. Sed quis velit.</li>
    </ul>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Proceed to the second step</h4>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">Complete the step-by-step process</h4>
    <p>Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.</p>
  </li>
</ol>

`;
};
const CustomTemplate = () => {
  return `<ol class="usa-process-list">
  <li class="usa-process-list__item padding-bottom-4">
    <h4 class="usa-process-list__heading font-sans-xl line-height-sans-1">Start a process.</h4>
    <p class="font-sans-lg margin-top-1 text-light">Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.</p>
  </li>
  <li class="usa-process-list__item padding-bottom-4">
    <h4 class="usa-process-list__heading font-sans-xl line-height-sans-1">Proceed to the second step.</h4>
    <p class="font-sans-lg margin-top-1 text-light">Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat.</p>
  </li>
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading font-sans-xl line-height-sans-1">Complete the step-by-step process.</h4>
    <p class="font-sans-lg margin-top-1 text-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque.</p>
  </li>
</ol>`;
};

const NoTextTemplate = () => {
  return `<ol class="usa-process-list">
  <li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-xl line-height-sans-1">Start a process.</p>
  </li>
  <li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-xl line-height-sans-1">Proceed to the second step.</p>
  </li>
  <li class="usa-process-list__item">
    <p class="usa-process-list__heading font-sans-xl line-height-sans-1">Complete the step-by-step process.</p>
  </li>
</ol>`;
};

export const ProcessList = Template.bind({});

//export const Custom = CustomTemplate.bind({});

//export const NoText = NoTextTemplate.bind({});
