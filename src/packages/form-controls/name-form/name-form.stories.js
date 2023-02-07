export default {
    title: "Form Elements/NameForm",
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
    <form class="usa-form">
    <fieldset class="usa-fieldset">
        <legend class="usa-legend">Name</legend>
        <label class="usa-label" for="title">Title <span class="usa-hint">(optional)</span></label>
        <input class="usa-input usa-input--small" id="title" name="title" type="text">

        <label class="usa-label" for="first-name">First name</label>
        <input class="usa-input" id="first-name" name="first-name" type="text" required aria-required="true">

        <label class="usa-label" for="middle-name">Middle name <span class="usa-hint">(optional)</span></label>
        <input class="usa-input" id="middle-name" name="middle-name" type="text">

        <label class="usa-label" for="last-name">Last name</label>
        <input class="usa-input" id="last-name" name="last-name" type="text" required aria-required="true">
    </fieldset>
    </form>
    `;
  };
  
  export const Default = Template.bind({});
  Default.args = {
    label: "Text input label",
  };
  