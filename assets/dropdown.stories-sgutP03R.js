const n={title:"Form Elements/Dropdown",argTypes:{label:{type:"string"},classTypes:{control:{type:"select"},options:["","usa-focus","usa-input--error","usa-input--success"]}}},e=l=>` 
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
  `,o=e.bind({});o.args={label:"Text input label"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return \` 
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
  \`;
}`,...o.parameters?.docs?.source}}};const a=["Dropdown"];export{o as Dropdown,a as __namedExportsOrder,n as default};
