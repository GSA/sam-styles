export default {
  title: "Components/Range Slider",
  /*argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 10 },
      defaultValue: 20,
    },
  },*/

};
const Template = (args) => {
  return `
  <div style="padding: 1rem">
    <input id="usa-range" class="${args.class}" type="range" min="${args.min}" max="${args.max}" step="${args.step}" value="${args.value}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" role="slider" />
</div>
`;
};
export const RangeSlider = Template.bind({});

RangeSlider.args = {
  class: "usa-range",
  min: "0",
  max: "100",
  step: "10",
  value: "20",
};