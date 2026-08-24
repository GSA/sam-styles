import{r as e}from"./preload-helper-Dl2UHooj.js";var t,n=e((()=>{t=`<nav>
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
`})),r,i=e((()=>{r=`<div class="grid-row grid-gap">
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
`})),a,o=e((()=>{a=`<nav aria-label="Subpanel side navigation">
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
`})),s,c,l,u,d;e((()=>{n(),i(),o(),s={title:`Components/SideNav`},c=()=>t,l=()=>r,u=()=>a,c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return SideNavDefault;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return SideNavCompare;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return SideNavSubpanel;
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Compare`,`Subpanel`]}))();export{l as Compare,c as Default,u as Subpanel,d as __namedExportsOrder,s as default};