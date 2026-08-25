const e=`<div class="padding-2">
  <p class="margin-bottom-1">Thin rule — <code>.thin</code></p>
  <hr class="thin" />

  <p class="margin-top-3 margin-bottom-1">Fine rule — <code>.fine</code></p>
  <hr class="fine" />
</div>
`,n=`<div class="padding-2">
  <p class="margin-bottom-1">
    Icon size utilities applied to <code>&lt;i&gt;</code>
  </p>
  <div class="margin-bottom-2">
    <i class="bi bi-bell size-xs"></i>
    <i class="bi bi-bell size-sm"></i>
    <i class="bi bi-bell size-lg"></i>
    <i class="bi bi-bell size-2x"></i>
    <i class="bi bi-bell size-3x"></i>
    <i class="bi bi-bell size-4x"></i>
    <i class="bi bi-bell size-5x"></i>
    <i class="bi bi-bell size-6x"></i>
    <i class="bi bi-bell size-7x"></i>
    <i class="bi bi-bell size-8x"></i>
    <i class="bi bi-bell size-9x"></i>
    <i class="bi bi-bell size-10x"></i>
  </div>

  <p class="margin-bottom-1">
    Icon margin utility — <code>.sds-icon-margin</code>
  </p>
  <span> <i class="bi bi-bell sds-icon-margin"></i>Label text </span>
</div>
`,l={title:"Branding/Elements"},i=()=>e,s=()=>n;i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return Borders;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return Utils;
}`,...s.parameters?.docs?.source}}};const a=["BorderUtilities","IconSizeUtilities"];export{i as BorderUtilities,s as IconSizeUtilities,a as __namedExportsOrder,l as default};
