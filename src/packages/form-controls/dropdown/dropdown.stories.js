export default {
    title: "Form Elements/Dropdown",
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
    <h4>Default</h4>
  <form class="usa-form">
      <label class="usa-label" for="options">Dropdown label</label>
      <select class="usa-select" name="options" id="options">
          <option value>- Select -</option>
          <option value="value1">Option A</option>
          <option value="value2">Option B</option>
          <option value="value3">Option C</option>
      </select>
  </form>

  <h4 class="margin-top-4">Small</h4>
  <form class="usa-form">
      <label class="usa-label usa-label--sm" for="options">Dropdown label</label>
      <select class="usa-select" name="options" id="options">
          <option value>- Select -</option>
          <option value="value1">Option A</option>
          <option value="value2">Option B</option>
          <option value="value3">Option C</option>
      </select>
  </form>
  `;
  };
  
  export const Dropdown = Template.bind({});
  Dropdown.args = {
    label: "Text input label",
  };
  