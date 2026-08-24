const i=`<nav>
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="">Parent link</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="" class="usa-current">Current page</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="">Child link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="" class="usa-current">Child link</a>
          <ul class="usa-sidenav__sublist">
            <li class="usa-sidenav__item">
              <a href="">Grandchild link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="">Grandchild link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="" class="usa-current">Grandchild link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="">Grandchild link</a>
            </li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="">Child link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="">Child link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="">Child link</a>
        </li>
      </ul>
    </li>
    <li class="usa-sidenav__item">
      <a href="">Parent link</a>
    </li>
  </ul>
</nav>
`,l=`<div class="grid-row grid-gap">
  <div class="tablet:grid-col-4 margin-bottom-4 tablet:margin-bottom-0">
    <h6 class="usa-heading-alt">Single level</h6>
    <nav aria-label="Side navigation,">
      <ul class="usa-sidenav">
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);" class="usa-current">Current page</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Parent link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Parent link</a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="tablet:grid-col-4 margin-bottom-4 tablet:margin-bottom-0">
    <h6 class="usa-heading-alt">Two levels</h6>
    <nav aria-label="Side navigation,,">
      <ul class="usa-sidenav">
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Parent link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);" class="usa-current">Current page</a>
          <ul class="usa-sidenav__sublist">
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);" class="usa-current">Child link</a>
            </li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Parent link</a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="tablet:grid-col-4">
    <h6 class="usa-heading-alt">Three levels</h6>
    <nav aria-label="Side navigation,,,">
      <ul class="usa-sidenav">
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Parent link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);" class="usa-current">Current page</a>
          <ul class="usa-sidenav__sublist">
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
              <ul class="usa-sidenav__sublist">
                <li class="usa-sidenav__item">
                  <a href="javascript:void(0);">Grandchild link</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="javascript:void(0);" class="usa-current"
                    >Grandchild link</a
                  >
                </li>
                <li class="usa-sidenav__item">
                  <a href="javascript:void(0);">Grandchild link</a>
                </li>
              </ul>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
            </li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Parent link</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`,e=`<nav aria-label="Subpanel side navigation">
  <ul class="usa-sidenav sds-subpanel">
    <li class="usa-sidenav__item">
      <a href="javascript:void(0);">Plain anchor link</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="javascript:void(0);" class="usa-link--active">Active link</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="javascript:void(0);">Another plain anchor</a>
    </li>
  </ul>
</nav>
`,r={title:"Components/SideNav"},a=()=>i,n=()=>l,s=()=>e;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return SideNavDefault;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return SideNavCompare;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return SideNavSubpanel;
}`,...s.parameters?.docs?.source}}};const t=["Default","Compare","Subpanel"];export{n as Compare,a as Default,s as Subpanel,t as __namedExportsOrder,r as default};
