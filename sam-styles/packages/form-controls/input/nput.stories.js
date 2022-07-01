export default {
  title: "FormControls/Input",
  argTypes: {
    label: {type: "string"},
    classTypes: {
      control: {type: "select"},
      options: ["", "usa-focus", "usa-input--error", "usa-input--success"],
    },
  },
};
const Template = (args) => {
  return ` 
<label class="usa-label" for="input-type-text">${args.label}</label>
<input class="usa-input ${args.classTypes}" id="input-type-text" name="input-type-text" type="text">
`;
};

export const Default = Template.bind({});
Default.args = {
  label: "Text input label",
};
