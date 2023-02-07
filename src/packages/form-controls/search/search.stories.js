export default {
  title: "Form Elements/Search",
  argTypes: {
    ariaLabel: {type: "string"},
    label: {type: "string"},
    formClass: {type: "string"},
    for: {type: "string"},
    id: {type: "string"},
  },
};

const Template = (args) => {
  return ` <section aria-label="${args.ariaLabel}" class="margin-2">
          <h2>${args.label}</h2>
          <form class="usa-search ${args.formClass}" role="search">
          <label class="usa-sr-only" for="${args.for}">Search</label>
          <input class="usa-input" id="${args.id}" type="search" name="search" placeholder="Search Here">
          <button class="usa-button" type="submit">
          <img src="search.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form>
</section>`;
};

const TemplateForOptions = (args) => {
  return ` <section aria-label="${args.ariaLabel}" class="margin-2">
          <form class="usa-form usa-search ${args.formClass}" role="search">
          <label class="usa-sr-only" for="options">Dropdown label</label>
          <select class="usa-select" name="options" id="options">
          <option value>- Select -</option>
          <option value="value1">Option A</option>
          <option value="value2">Option B</option>
          <option value="value3">Option C</option>
      </select>
      <label class="usa-sr-only" for="${args.for}">Search</label>
      <input class="usa-input" id="${args.id}" type="search" name="search" placeholder="Search Here">

          <button class="usa-button" type="submit">
          <img src="search.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form>
</section>`;
};

export const SmallSearch = Template.bind({});
SmallSearch.args = {
  ariaLabel: "Small Search component",
  label: "Small Search",
  formClass: "usa-search--small",
  for: "search-field-small",
  id: "search-field-small",
};

export const SmallSearchOptions = TemplateForOptions.bind({});
SmallSearchOptions.args = {
  ariaLabel: "Small search component with select",
  formClass: "usa-search--small",
  for: "search-field-small",
  id: "search-field-small",
};

export const BigSearch = Template.bind({});
BigSearch.args = {
  ariaLabel: "Big search component",
  label: "Big Search",
  formClass: "usa-search--big",
  for: "search-field-big",
  id: "search-field-big",
};

export const BigSearchOptions = TemplateForOptions.bind({});
BigSearchOptions.args = {
  ariaLabel: "Big search component with select",
  formClass: "usa-search--big",
  for: "search-field-big",
  id: "search-field-big",
};
