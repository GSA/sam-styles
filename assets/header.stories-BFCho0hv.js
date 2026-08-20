const s=`<div class="usa-overlay"></div>
<header class="usa-header usa-header--extended">
  <div class="usa-navbar">
    <div class="usa-logo" id="extended-logo">
      <em class="usa-logo__text"
        ><a href="/" title="Home" aria-label="Home">Logo</a></em
      >
    </div>
    <button class="usa-menu-btn">
      <span class="fa-layers fa-fw fa-3x">
        <i class="fas text-ink fa-square text-primary"></i>
        <i class="sds text-ink fa-bars" data-fa-transform="shrink-6"></i>
      </span>
      <span class="usa-sr-only">Menu</span>
    </button>
  </div>
  <nav aria-label="Primary navigation" class="usa-nav">
    <div class="usa-nav__inner">
      <button class="usa-nav__close">
        <i
          class="sds text-ink fa-exit fa-fw"
          aria-hidden="true"
          title="Screen reader description"
          data-fa-transform="shrink-1"
        ></i>
        <span class="sr-only">Screen reader description</span>

        <span class="usa-sr-only">Close</span>
      </button>
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link usa-current" href=""
            ><span>Current section</span></a
          >
        </li>
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link" href=""><span>Section</span></a>
        </li>
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link" href="javascript:void(0)"
            ><span>Simple link</span></a
          >
        </li>
      </ul>
      <div class="usa-nav__secondary">
        <ul class="usa-nav__secondary-links">
          <li class="usa-nav__secondary-item">
            <a href="">
              <i class="sds text-ink fa-bars"></i>

              <span class="sds-nav__secondary-item-text">Secondary link</span>
            </a>
          </li>
          <li class="usa-nav__secondary-item">
            <a href="">
              <i class="sds text-ink fa-bars"></i>

              <span class="sds-nav__secondary-item-text"
                >Another secondary link</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
`,e=`<div class="usa-overlay"></div>
<header class="usa-header usa-header--extended">
  <div class="usa-navbar">
    <div class="usa-logo" id="sam-logo">
      <a href="/" title="Home" aria-label="Home">
        <img
          class="sds-header__logo"
          src="../../../images/logo-sam.svg"
          alt="Logo"
        />
      </a>
    </div>
    <button class="usa-menu-btn">
      <span class="fa-layers fa-fw fa-3x">
        <i class="fas text-ink fa-square text-primary"></i>
        <i class="sds text-ink fa-bars" data-fa-transform="shrink-6"></i>

        <span class="fa-layers-counter"></span>
      </span>
      <span class="usa-sr-only">Menu</span>
    </button>
  </div>
  <nav aria-label="Primary navigation" class="usa-nav">
    <div class="usa-nav__inner">
      <button class="usa-nav__close">
        <i
          class="sds text-ink fa-exit fa-fw"
          aria-hidden="true"
          title="Screen reader description"
          data-fa-transform="shrink-1"
        ></i>
        <span class="sr-only">Screen reader description</span>

        <span class="usa-sr-only">Close</span>
      </button>
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link usa-current" href="javascript:void(0)"
            ><span>Home</span></a
          >
        </li>
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link" href="javascript:void(0)"
            ><span>Search</span></a
          >
        </li>
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link" href="javascript:void(0)"
            ><span>Databank</span></a
          >
        </li>
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link" href="javascript:void(0)"
            ><span>Data Services</span></a
          >
        </li>
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link" href="javascript:void(0)"
            ><span>Help</span></a
          >
        </li>
      </ul>
      <div class="usa-nav__secondary">
        <ul class="usa-nav__secondary-links">
          <li class="usa-nav__secondary-item">
            <a href="" class="usa-current">
              <div class="display-inline-block text-middle">
                <i class="bi bi-pencil-square"></i>
              </div>

              <span class="sds-nav__secondary-item-text">Request</span>
            </a>
          </li>
          <li class="usa-nav__secondary-item">
            <a href="">
              <div class="display-inline-block text-middle">
                <i class="bi bi-bell"></i>
              </div>

              <span class="sds-nav__secondary-item-text">Notifications</span>
            </a>
          </li>
          <li class="usa-nav__secondary-item">
            <a href="">
              <div class="display-inline-block text-middle">
                <i class="bi bi-grid"></i>
              </div>

              <span class="sds-nav__secondary-item-text">Workspace</span>
            </a>
          </li>
          <li class="usa-nav__secondary-item">
            <a href="">
              <div class="display-inline-block text-middle">
                <i class="bi bi-arrow-right-square"></i>
              </div>

              <span class="sds-nav__secondary-item-text">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
`,i={title:"Structure/Header"},a=()=>s,n=()=>e;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return DefaultHeader;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return SamHeader;
}`,...n.parameters?.docs?.source}}};const r=["Default","Sam"];export{a as Default,n as Sam,r as __namedExportsOrder,i as default};
