export default {
    title: "Miscellaneous/Sort",
  };
  const Template = () => {
      return `<label class="usa-label font-sans-2xs text-italic text-base" for="options">
    Sort by
    </label>
    <select class="usa-select border-base-light maxw-card" name="options" id="options">
        <option value="">Entity Name</option>
        <option value="">Entity Status</option>
        <option value="">Entity ID</option>
        <option value="">Expiration Date</option>
    </select>
  `;
  };
  export const Sort = Template.bind({});
  