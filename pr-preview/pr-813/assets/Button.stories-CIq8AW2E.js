const m=`<table class="sds-table">
  <tr>
    <th>
      <h3>Standard Buttons</h3>
    </th>
    <th>Default</th>
    <th>Hover</th>
    <th>Active</th>
    <th>Focus</th>
    <th>Disabled</th>
  </tr>
  <!-- Primary buttons -->
  <tr style="height: 80px">
    <td class="padding-1">Primary</td>
    <td class="padding-1"><button class="usa-button">Button</button></td>
    <td class="padding-1">
      <button class="usa-button usa-button--hover">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--active">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-focus">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button" disabled="disabled">Disabled</button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Primary-lighter</td>
    <td class="padding-1">
      <button class="usa-button bg-primary-lighter">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button bg-primary-lighter usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button bg-primary-lighter usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button bg-primary-lighter usa-focus">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button bg-primary-lighter" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Primary-Outline</td>
    <td class="padding-1">
      <button class="usa-button usa-button--outline">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--outline usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--outline usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--outline usa-focus">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--outline" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>

  <!-- <tr>
        <td class="padding-1">Primary Icon (example)</td>
        <td class="padding-1">
            <div class=" grid-col">
                <div class=" sds-button--outline">
                    <button class=" usa-button sds-button--icon text-center">
                        <i class=" fa fa-window-close bi bi-arrow-right-circle height-3"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class=" bi bi-arrow-right-circle height-3" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" />
                        </svg>
                        <span class=" sds-button--icon__title">Primary Icon</span>
                    </button>
                </div>
            </div>
        </td>
        <td class="padding-1"><button class=" usa-button usa-button--outline">Primary Icon</button></td>
        <td class="padding-1"><button class=" usa-button usa-button--outline usa-button--hover">Hover</button></td>
        <td class="padding-1"><button class=" usa-button usa-button--outline usa-button--active">Active</button></td>
        <td class="padding-1"><button class=" usa-button usa-button--outline usa-focus">Focus</button></td>
        <td class="padding-1"><button class=" usa-button usa-button--outline" disabled="disabled">Disabled</button></td>
    </tr> -->
  <!-- Secondary buttons -->
  <tr style="height: 80px">
    <td class="padding-1">Secondary</td>
    <td class="padding-1">
      <button class="usa-button usa-button--secondary">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--secondary usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--secondary usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--secondary usa-focus">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--secondary" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Secondary-light</td>
    <td class="padding-1">
      <button class="usa-button usa-button--secondary bg-secondary-lighter">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--secondary bg-secondary-lighter usa-button--hover"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--secondary bg-secondary-lighter usa-button--active"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--secondary bg-secondary-lighter usa-focus"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--secondary bg-secondary-lighter"
        disabled="disabled"
      >
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Secondary-Outline</td>
    <td class="padding-1">
      <button class="usa-button usa-button--secondary usa-button--outline">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--secondary usa-button--outline usa-button--hover"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--secondary usa-button--outline usa-button--active"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--secondary usa-button--outline usa-focus"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--secondary usa-button--outline"
        disabled="disabled"
      >
        Disabled
      </button>
    </td>
  </tr>

  <!-- Base buttons -->
  <tr style="height: 80px">
    <td class="padding-1">Base</td>
    <td class="padding-1">
      <button class="usa-button usa-button--base">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--base usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--base usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--base usa-focus">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--base" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Base light</td>
    <td class="padding-1">
      <button class="usa-button usa-button--base bg-base-lighter">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--base bg-base-lighter usa-button--hover"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--base bg-base-lighter usa-button--active"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--base bg-base-lighter usa-focus">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--base bg-base-lighter"
        disabled="disabled"
      >
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Base Outline</td>
    <td class="padding-1">
      <button class="usa-button usa-button--base usa-button--outline">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--base usa-button--outline usa-button--hover"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--base usa-button--outline usa-button--active"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--base usa-button--outline usa-focus">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--base usa-button--outline"
        disabled="disabled"
      >
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Info-Light</td>
    <td class="padding-1">
      <button class="usa-button usa-button--info-light">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--info-light usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--info-light usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--info-light usa-focus">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--info-light" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Error-Light</td>
    <td class="padding-1">
      <button class="usa-button usa-button--error-light">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--error-light usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--error-light usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--error-light usa-focus">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--error-light" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>
</table>

<table class="sds-table">
  <tr>
    <th>
      <h3>Accent Buttons</h3>
    </th>
    <th>Default</th>
    <th>Hover</th>
    <th>Active</th>
    <th>Focus</th>
    <th>Disabled</th>
  </tr>
  <!-- Accent Cool buttons -->
  <tr style="height: 80px">
    <td class="padding-1">Accent Cool</td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-cool">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-cool usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-cool usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-cool usa-focus">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-cool" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Accent Cool light</td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-cool bg-accent-cool-lighter">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-cool bg-accent-cool-lighter usa-button--hover"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-cool bg-accent-cool-lighter usa-button--active"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-cool bg-accent-cool-lighter usa-focus"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-cool bg-accent-cool-lighter"
        disabled="disabled"
      >
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Accent Cool Outline</td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-cool usa-button--outline">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-cool usa-button--outline usa-button--hover"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-cool usa-button--outline usa-button--active"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-cool usa-button--outline usa-focus"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-cool usa-button--outline"
        disabled="disabled"
      >
        Disabled
      </button>
    </td>
  </tr>

  <!-- Accent Warm buttons -->
  <tr style="height: 80px">
    <td class="padding-1">Accent Warm</td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-warm">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-warm usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-warm usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-warm usa-focus">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-warm" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Accent Warm light</td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-warm bg-accent-warm-lighter">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-warm bg-accent-warm-lighter usa-button--hover"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-warm bg-accent-warm-lighter usa-button--active"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-warm bg-accent-warm-lighter usa-focus"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-warm bg-accent-warm-lighter"
        disabled="disabled"
      >
        Disabled
      </button>
    </td>
  </tr>

  <tr style="height: 80px">
    <td class="padding-1">Accent Warm Outline</td>
    <td class="padding-1">
      <button class="usa-button usa-button--accent-warm usa-button--outline">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-warm usa-button--outline usa-button--hover"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-warm usa-button--outline usa-button--active"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-warm usa-button--outline usa-focus"
      >
        Button
      </button>
    </td>
    <td class="padding-1">
      <button
        class="usa-button usa-button--accent-warm usa-button--outline"
        disabled="disabled"
      >
        Disabled
      </button>
    </td>
  </tr>
</table>

<table class="sds-table">
  <tr>
    <th>
      <h3>Special Buttons</h3>
    </th>
    <th>Default</th>
    <th>Hover</th>
    <th>Active</th>
    <th>Focus</th>
    <th>Disabled</th>
  </tr>
  <!-- UnStyled buttons -->
  <tr style="height: 80px">
    <td class="padding-1">Unstyled Buttons</td>
    <td class="padding-1">
      <button class="usa-button usa-button--unstyled">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--unstyled usa-button--hover">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--unstyled usa-button--active">
        Button
      </button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--unstyled usa-focus">Button</button>
    </td>
    <td class="padding-1">
      <button class="usa-button usa-button--unstyled" disabled="disabled">
        Disabled
      </button>
    </td>
  </tr>
</table>
`,z=`<div class="padding-4">
  <div class="grid-row">
    <div class="grid-col">
      <div class="padding-y-2">
        <button class="usa-button usa-button--outline usa-button--secondary">
          outline-secondary
        </button>
      </div>
    </div>
    <div class="grid-col">
      <div class="grid-row">
        <div class="grid-col padding-2">
          <button
            class="usa-button usa-button--outline usa-button--secondary usa-button--hover"
          >
            Hover
          </button>
        </div>
        <div class="grid-col padding-2">
          <button
            class="usa-button usa-button--outline usa-button--secondary usa-button--active"
          >
            Active
          </button>
        </div>
        <div class="grid-col padding-2">
          <button
            class="usa-button usa-button--outline usa-button--secondary usa-focus"
          >
            Focused
          </button>
        </div>
        <div class="grid-col padding-2">
          <button
            class="usa-button usa-button--outline usa-button--secondary usa-button--disabled"
          >
            Disabled
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`,f=`<div class="bg-base-darkest padding-4">
  <div class="grid-row">
    <div class="grid-col">
      <div class="padding-y-2">
        <button class="usa-button usa-button--outline usa-button--inverse">
          outline-inverse
        </button>
      </div>
    </div>
    <div class="grid-col">
      <div class="grid-row">
        <div class="grid-col padding-2">
          <button
            class="usa-button usa-button--outline usa-button--inverse usa-button--hover"
          >
            Hover
          </button>
        </div>
        <div class="grid-col padding-2">
          <button
            class="usa-button usa-button--outline usa-button--inverse usa-button--active"
          >
            Active
          </button>
        </div>
        <div class="grid-col padding-2">
          <button
            class="usa-button usa-button--outline usa-button--inverse usa-focus"
          >
            Focused
          </button>
        </div>
        <div class="grid-col padding-2">
          <button
            class="usa-button usa-button--outline usa-button--inverse usa-button--disabled"
          >
            Disabled
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`,B=`<div class="bg-base-lightest padding-4">
  <div class="grid-row">
    <div class="grid-col">
      <div class="padding-y-2">
        <button class="usa-button sds-button--white">white</button>
      </div>
    </div>
    <div class="grid-col">
      <div class="grid-row">
        <div class="grid-col padding-2">
          <button class="usa-button sds-button--white usa-button--hover">
            Hover
          </button>
        </div>
        <div class="grid-col padding-2">
          <button class="usa-button sds-button--white usa-button--active">
            Active
          </button>
        </div>
        <div class="grid-col padding-2">
          <button class="usa-button sds-button--white usa-focus">
            Focused
          </button>
        </div>
        <div class="grid-col padding-2">
          <button class="usa-button sds-button--white usa-button--disabled">
            Disabled
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`,w=`<div class="padding-4">
  <div class="grid-row">
    <div class="grid-col">
      <div class="padding-y-2">
        <button class="usa-button sds-button--shadow">shadow</button>
      </div>
    </div>
    <div class="grid-col">
      <div class="grid-row">
        <div class="grid-col padding-2">
          <button class="usa-button sds-button--shadow usa-button--hover">
            Hover
          </button>
        </div>
        <div class="grid-col padding-2">
          <button class="usa-button sds-button--shadow usa-button--active">
            Active
          </button>
        </div>
        <div class="grid-col padding-2">
          <button class="usa-button sds-button--shadow usa-focus">
            Focused
          </button>
        </div>
        <div class="grid-col padding-2">
          <button class="usa-button sds-button--shadow usa-button--disabled">
            Disabled
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`,S={title:"Components/Button/Standard",argTypes:{label:{control:"text"},type:{control:{type:"select"},options:["primary","secondary","base","unstyled","accent-cool","outline","shadow"]},size:{control:{type:"select"},options:["","big","small"]},color:{control:{type:"select"},options:["","light","lighter","lightest","vivid","dark","darker"]}}},n=t=>{var s="";t.size&&(t.size==="small"?s="sds-button--small":s=`usa-button--${t.size}`);var a="";t.type&&(t.type==="danger"?a="sds-button--danger":a=`usa-button--${t.type}`);const h=t.type?t.type:"primary",o=t.type&&t.color?`bg-${h}-${t.color}`:"";return`<button
    type="button"
    class="usa-button ${a} ${s} ${o}"
    >${t.label}</button
>
<button
    type="button"
    class="usa-button ${a} ${s} ${o} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button ${a} ${s} ${o} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button ${a} ${s} ${o} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button ${a} ${s} ${o}"
disabled="disabled"
    >Disabled</button
>
`},g=()=>m,y=()=>z,D=()=>f,v=()=>B,$=()=>w,u=n.bind({});u.args={label:"Default"};const e=n.bind({});e.args={label:"Secondary",type:"secondary"};const b=n.bind({});b.args={label:"Accent",type:"accent-cool"};const d=n.bind({});d.args={label:"Base",type:"base"};const l=n.bind({});l.args={label:"Small",size:"small"};const c=n.bind({});c.args={label:"Big",size:"big"};const r=n.bind({});r.args={label:"Outline",type:"outline"};const i=n.bind({});i.args={label:"Danger",type:"danger"};const p=n.bind({});p.args={label:"Unstyled",type:"unstyled"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return ButtonTemplate;
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return OutlineSecondaryTemplate;
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return OutlineInverseTemplate;
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return WhiteTemplate;
}`,...v.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return ShadowTemplate;
}`,...$.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...u.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...e.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = \`usa-button--\${args.size}\`;
    }
  }
  //var typeD = args.type ? \`usa-button--\${args.type}\` : "";
  var typeD = "";
  if (args.type) {
    if (args.type === "danger") {
      typeD = "sds-button--danger";
    } else {
      typeD = \`usa-button--\${args.type}\`;
    }
  }
  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? \`bg-\${colorType}-\${args.color}\` : "";
  return \`<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
    >\${args.label}</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button \${typeD} \${sizeD} \${colorD}"
disabled="disabled"
    >Disabled</button
>
\`;
}`,...p.parameters?.docs?.source}}};const A=["Variants","OutlineSecondary","OutlineInverse","White","Shadow","Default","Secondary","AccentCool","Base","Small","Big","Outline","Danger","Unstyled"];export{b as AccentCool,d as Base,c as Big,i as Danger,u as Default,r as Outline,D as OutlineInverse,y as OutlineSecondary,e as Secondary,$ as Shadow,l as Small,p as Unstyled,g as Variants,v as White,A as __namedExportsOrder,S as default};
