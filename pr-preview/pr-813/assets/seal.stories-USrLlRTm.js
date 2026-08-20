const s=`<div class="sds-seal">
  <i class="sds text-ink bi-flag-fill size-2x margin-y-1 text-secondary"></i>
  <div class="sds-seal__content">
    Official U.S. Government Website
    <span>100% Free</span>
  </div>
</div>
`,r={title:"Structure/Seal"},e=()=>s;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return SealStructure;
}`,...e.parameters?.docs?.source}}};const t=["Seal"];export{e as Seal,t as __namedExportsOrder,r as default};
