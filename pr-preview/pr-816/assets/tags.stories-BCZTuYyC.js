const r=`<h2>Chips</h2>
<span class="sds-tag sds-tag--chip">Normal</span>

<span class="sds-tag sds-tag--chip">
  Normal with close icon
  <button class="sds-tag__close">
    <span class="fas fa-times" aria-hidden="true"></span>
  </button>
</span>

<div class="width-10">
  <span class="sds-tag sds-tag--chip">
    Wrapping with close icon
    <button class="sds-tag__close">
      <span class="fas fa-times" aria-hidden="true"></span>
    </button>
  </span>
</div>

<h2>Input Chips</h2>

<input
  aria-autocomplete="list"
  autocomplete="off"
  class="usa-input padding-right-3"
  type="text"
  aria-label="Auto Complete"
  id="autocomplete5"
  placeholder="Enter text"
  aria-activedescendant=""
/>

<ul
  aria-live="polite"
  aria-relevant="additions"
  class="usa-list usa-list--unstyled sds-autocomplete-selected"
  role="listbox"
  aria-label="Autocomplete 5 results"
>
  <li role="option">
    <div class="sds-tag sds-tag--chip sds-tag--input">
      <div class="sds--tag__item">
        <div>Level 1</div>
        <div>id 1</div>
      </div>
      <button class="sds-tag__close">
        <span class="fas fa-times" aria-hidden="true"></span>
      </button>
    </div>
  </li>
  <li role="option">
    <div class="sds-tag sds-tag--chip sds-tag--input">
      <div class="sds--tag__item">
        <div>Level 2</div>
        <div>id 2</div>
      </div>
    </div>
  </li>
  <li role="option">
    <div class="sds-tag sds-tag--chip sds-tag--input sds-tag--disabled">
      <div class="sds--tag__item">
        <div>Level 2</div>
        <div>id 2</div>
      </div>
    </div>
  </li>
</ul>
`,e=`<span class="usa-tag">New</span>

<h3 class="margin-bottom-1">Alternatives</h3>
<span class="usa-tag sds-tag--info-purple">DUNS</span>

<span class="usa-tag sds-tag--info-white">SAM</span>

<h3 class="margin-bottom-1">Customize tag color</h3>
<span class="usa-tag sds-tag--info-white sds-tag--outline--error bg-error-light"
  >SAM</span
>
<span
  class="usa-tag sds-tag--info-white sds-tag--outline--green bg-secondary text-white"
  >SAM</span
>
<span class="usa-tag sds-tag--info-white sds-tag--outline--green bg-accent-warm"
  >SAM</span
>
<span
  class="usa-tag sds-tag--info-white sds-tag--outline--warning-light bg-accent-cool-light"
  >SAM</span
>
`,l=`<h2>Status</h2>\r
\r
<div class="grid-row">\r
    <div class="grid-col-auto margin-top-2">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm bg-warning"></i>\r
            Pending ID Assignment\r
        </span>\r
    </div>\r
    <div class="grid-col-auto margin-top-2">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm sds-status--indigo-warm"></i>\r
            ID Assigned(Public search)\r
        </span>\r
    </div>\r
    <div class="grid-col-auto margin-top-2">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm bg-success-light"></i>\r
            ID Assigned(Non-public search)\r
        </span>\r
    </div>\r
    <div class="grid-col-auto margin-top-2">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm bg-error-light"></i>\r
            Unvalidated ID\r
        </span>\r
    </div>\r
    <div class="grid-col-auto margin-top-2">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm sds-status--info-dark"></i>\r
            Draft Registration\r
        </span>\r
    </div>\r
    <div class="grid-col-auto margin-top-2">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm bg-primary-dark"></i>\r
            Active Registration\r
        </span>\r
    </div>\r
    <div class="grid-col-auto margin-top-2">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm bg-base"></i>\r
            Inactive Registration\r
        </span>\r
    </div>\r
    <div class="grid-col-auto margin-top-2">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm sds-status--gold-dark"></i>\r
            Deleted/Deactivated\r
        </span>\r
    </div>\r
</div>\r
<h2>Status Examples</h2>\r
</br>\r
<div>\r
    <div>\r
        <h3>TEST</h3>\r
    </div>\r
    <div class="padding-left-1 margin-top-0">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm bg-primary-dark"></i>\r
            Active Registration\r
        </span>\r
    </div>\r
</div>\r
</br>\r
<div>\r
    <div>\r
        <h3>LONG STRING THAT WRAPS</h3>\r
    </div>\r
    <div class="padding-left-1 margin-top-0">\r
        <span class="sds-tag sds-tag--status">\r
            <i class="sds-status sds-status--sm bg-primary-dark"></i>\r
            Active Registration\r
        </span>\r
    </div>\r
</div>`,u=`<h3>Outline Options</h3>
<div class="grid-row flex-align-end">
  <div class="grid-col-auto margin-top-2">
    <span class="sds-type--label-title">Expiration Date</span>
    <span class="sds-tag sds-tag--outline flex-justify-center"
      >Feb 20, 2019</span
    >
  </div>
  <div class="grid-col-auto margin-top-2">
    <span class="sds-type--label-title">Expiration Date</span>
    <span class="sds-tag sds-tag--outline--info flex-justify-center"
      >Feb 20, 2019</span
    >
  </div>
  <div class="grid-col-auto margin-top-2">
    <span class="sds-type--label-title">Expiration Date</span>
    <span class="sds-tag sds-tag--outline--warning flex-justify-center"
      >Feb 20, 2019</span
    >
  </div>
  <div class="grid-col-auto margin-top-2">
    <span class="sds-type--label-title">Expiration Date</span>
    <span class="sds-tag sds-tag--outline--danger flex-justify-center"
      >Feb 20, 2019</span
    >
  </div>
</div>

<h3>Mixed Heights Sample</h3>
<div class="grid-row flex-align-stretch">
  <div class="grid-col-auto margin-top-2">
    <span class="sds-type--label-title">Status</span>
    <span class="sds-tag sds-tag--outline">
      <i class="sds-status sds-status--sm sds-status--yellow"></i>Work In
      Progress</span
    >
  </div>
  <div class="grid-col-auto margin-top-2">
    <span class="sds-type--label-title">Status</span>
    <span class="sds-tag sds-tag--outline">
      <i class="sds-status sds-status--sm sds-status--red"></i>Expired</span
    >
  </div>
  <div class="grid-col-auto margin-top-2">
    <span class="sds-type--label-title">Expiration Date</span>
    <span class="sds-tag sds-tag--outline--error flex-justify-center"
      >Feb 20, 2019</span
    >
  </div>
</div>
`,c=`<p>
  Note to SAM developers: These dot and outline color combinations are not
  approved for use on SAM
</p>
<h3>Colors</h3>
<div class="grid-row flex-align-stretch">
  <span class="sds-tag sds-tag--outline--blue margin-1"
    ><i class="sds-status sds-status--sm sds-status--blue"></i>blue</span
  >
  <span class="sds-tag sds-tag--outline--red margin-1"
    ><i class="sds-status sds-status--sm sds-status--red"></i>red</span
  >
  <span class="sds-tag sds-tag--outline--green margin-1"
    ><i class="sds-status sds-status--sm sds-status--green"></i>green</span
  >
  <span class="sds-tag sds-tag--outline--yellow margin-1"
    ><i class="sds-status sds-status--sm sds-status--yellow"></i>yellow</span
  >
  <span class="sds-tag sds-tag--outline--light-blue margin-1"
    ><i class="sds-status sds-status--sm sds-status--light-blue"></i
    >light-blue</span
  >
  <span class="sds-tag sds-tag--outline--gray margin-1"
    ><i class="sds-status sds-status--sm sds-status--gray"></i>gray</span
  >
  <span class="sds-tag sds-tag--outline--dark-gray margin-1"
    ><i class="sds-status sds-status--sm sds-status--dark-gray"></i
    >dark-gray</span
  >
  <span class="sds-tag sds-tag--outline--brown margin-1"
    ><i class="sds-status sds-status--sm sds-status--brown"></i>brown</span
  >
</div>

<h3>State</h3>
<div class="grid-row flex-align-stretch">
  <span class="sds-tag sds-tag--outline--info margin-1"
    ><i class="sds-status sds-status--sm sds-status--info"></i>info</span
  >
  <span class="sds-tag sds-tag--outline--error margin-1"
    ><i class="sds-status sds-status--sm sds-status--error"></i>error</span
  >
  <span class="sds-tag sds-tag--outline--warning margin-1"
    ><i class="sds-status sds-status--sm sds-status--warning"></i>warning</span
  >
  <span class="sds-tag sds-tag--outline--success margin-1"
    ><i class="sds-status sds-status--sm sds-status--success"></i>success</span
  >
  <span class="sds-tag sds-tag--outline--disabled margin-1"
    ><i class="sds-status sds-status--sm sds-status--disabled"></i
    >disabled</span
  >
</div>

<h3>Other</h3>
<div class="grid-row flex-align-stretch">
  <span class="sds-tag sds-tag--outline--info-light margin-1"
    ><i class="sds-status sds-status--sm sds-status--info-light"></i
    >info-light</span
  >
  <span class="sds-tag sds-tag--outline--info-dark margin-1"
    ><i class="sds-status sds-status--sm sds-status--info-dark"></i
    >info-dark</span
  >
  <span class="sds-tag sds-tag--outline--info-darker margin-1"
    ><i class="sds-status sds-status--sm sds-status--info-darker"></i
    >info-darker</span
  >
  <span class="sds-tag sds-tag--outline--error-light margin-1"
    ><i class="sds-status sds-status--sm sds-status--error-light"></i
    >error-light</span
  >
  <span class="sds-tag sds-tag--outline--error-dark margin-1"
    ><i class="sds-status sds-status--sm sds-status--error-dark"></i
    >error-dark</span
  >
  <span class="sds-tag sds-tag--outline--error-darker margin-1"
    ><i class="sds-status sds-status--sm sds-status--error-darker"></i
    >error-darker</span
  >
  <span class="sds-tag sds-tag--outline--warning-light margin-1"
    ><i class="sds-status sds-status--sm sds-status--warning-light"></i
    >warning-light</span
  >
  <span class="sds-tag sds-tag--outline--warning-dark margin-1"
    ><i class="sds-status sds-status--sm sds-status--warning-dark"></i
    >warning-dark</span
  >
  <span class="sds-tag sds-tag--outline--warning-darker margin-1"
    ><i class="sds-status sds-status--sm sds-status--warning-darker"></i
    >warning-darker</span
  >
  <span class="sds-tag sds-tag--outline--success-light margin-1"
    ><i class="sds-status sds-status--sm sds-status--success-light"></i
    >success-light</span
  >
  <span class="sds-tag sds-tag--outline--success-dark margin-1"
    ><i class="sds-status sds-status--sm sds-status--success-dark"></i
    >success-dark</span
  >
  <span class="sds-tag sds-tag--outline--success-darker margin-1"
    ><i class="sds-status sds-status--sm sds-status--success-darker"></i
    >success-darker</span
  >
  <span class="sds-tag sds-tag--outline--danger margin-1"
    ><i class="sds-status sds-status--sm sds-status--danger"></i>danger</span
  >
</div>
`,o=`<h2>Status tags:</h2>
<div class="grid-column">
  <div class="grid-col-auto margin-top-2">
    <span class="sds-status-tag sds-status-tag--info">In Progress</span>

    <span class="sds-status-tag sds-status-tag--error">Needs Review</span>

    <span class="sds-status-tag sds-status-tag--accent-cool"
      >Not Started</span
    >

    <span class="sds-status-tag sds-status-tag--locked">
      <i class="bi bi-lock-fill"></i> Locked
    </span>

    <span class="sds-status-tag sds-status-tag--primary-lighter"
      >Complete</span
    >
  </div>
</div>

<h2>In progress:</h2>
<div class="usa-card grid-col-6 tablet:grid-col-4">
  <div class="usa-card__container">
    <div class="sds-tag-right-align">
        <span class="sds-status-tag sds-status-tag--info">In Progress</span>
      </div>
    <div class="usa-card__header">
      <h4 class="usa-card__heading">Business Types</h4>
    </div>
    <div class="usa-card__body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </p>
    </div>
    <div class="usa-card__footer">
      <button class="usa-button usa-button--info-light">Button</button>
    </div>
  </div>

</br>

  <div class="usa-card__container">
    <div class="sds-tag-right-align">
      <span class="sds-status-tag sds-status-tag--error"
        >Needs Review</span
      >
    </div>
    <div class="usa-card__header">
      <h4 class="usa-card__heading">Business Types</h4>
    </div>
    <div class="usa-card__body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </p>
    </div>
    <div class="usa-card__footer">
      <button class="usa-button usa-button--error-light">Button</button>
    </div>
  </div>
  <h2>Not started:</h2>
  <div class="usa-card__container">
    <div class="sds-tag-right-align">
      <span class="sds-status-tag sds-status-tag--accent-cool"
        >Not Started</span
      >
    </div>
    <div class="usa-card__header">
      <h4 class="usa-card__heading">Business Types</h4>
    </div>
    <div class="usa-card__body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </p>
    </div>
    <div class="usa-card__footer">
      <button class="usa-button usa-button--accent-cool">Button</button>
    </div>
  </div>
</br>
  <div class="usa-card__container">
    <div class="sds-tag-right-align">
      <span class="sds-status-tag sds-status-tag--locked">
        <i class="bi bi-lock-fill"></i> Locked
      </span>
    </div>
    <div class="usa-card__header">
      <h4 class="usa-card__heading">Business Types</h4>
    </div>
    <div class="usa-card__body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </p>
    </div>
    <div class="usa-card__footer">
      <button class="usa-button usa-button--base bg-base-lighter">
        Button
      </button>
    </div>
  </div>
  <h2>Complete</h2>

  <div class="usa-card__container">
    <div class="sds-tag-right-align">
      <span class="sds-status-tag sds-status-tag--primary-lighter"
        >Complete</span
      >
    </div>
    <div class="usa-card__header">
      <h4 class="usa-card__heading">Business Types</h4>
    </div>
    <div class="usa-card__body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
        tenetur quo cupiditate, eaque qui officia recusandae.
      </p>
    </div>
    <div class="usa-card__footer">
      <button class="usa-button bg-primary-lighter">Button</button>
    </div>
  </div>
</div>
`,g={title:"Components/Tags"},s=()=>e,a=()=>r,n=()=>l,t=()=>u,i=()=>c,d=()=>o;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return info;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return chips;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return status;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return outlinedSam;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return outlinedExtended;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return statusTag;
}`,...d.parameters?.docs?.source}}};const p=["Info","Chips","Status","OutlinedSam","OutlinedExtended","StatusTag"];export{a as Chips,s as Info,i as OutlinedExtended,t as OutlinedSam,n as Status,d as StatusTag,p as __namedExportsOrder,g as default};
