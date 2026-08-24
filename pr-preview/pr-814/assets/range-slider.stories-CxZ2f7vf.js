const s={title:"Components/Range Slider"},r=a=>`
  <div style="padding: 1rem">
    <input id="usa-range" class="${a.class}" type="range" min="${a.min}" max="${a.max}" step="${a.step}" value="${a.value}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" role="slider" />
</div>
`,e=r.bind({});e.args={class:"usa-range",min:"0",max:"100",step:"10",value:"20"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'args => {\n  return `\n  <div style="padding: 1rem">\n    <input id="usa-range" class="${args.class}" type="range" min="${args.min}" max="${args.max}" step="${args.step}" value="${args.value}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20" role="slider" />\n</div>\n`;\n}',...e.parameters?.docs?.source}}};const n=["RangeSlider"];export{e as RangeSlider,n as __namedExportsOrder,s as default};
