const e={title:"Miscellaneous/Sort"},o=()=>`<label class="usa-label font-sans-2xs text-italic text-base" for="options">
    Sort by
    </label>
    <select class="usa-select border-base-light maxw-card" name="options" id="options">
        <option value="">Entity Name</option>
        <option value="">Entity Status</option>
        <option value="">Entity ID</option>
        <option value="">Expiration Date</option>
    </select>
  `,t=o.bind({});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return \`<label class="usa-label font-sans-2xs text-italic text-base" for="options">
    Sort by
    </label>
    <select class="usa-select border-base-light maxw-card" name="options" id="options">
        <option value="">Entity Name</option>
        <option value="">Entity Status</option>
        <option value="">Entity ID</option>
        <option value="">Expiration Date</option>
    </select>
  \`;
}`,...t.parameters?.docs?.source}}};const a=["Sort"];export{t as Sort,a as __namedExportsOrder,e as default};
