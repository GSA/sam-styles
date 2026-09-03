import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a;function o(){return(o=e((()=>{t={title:`SDS Styles/Overrides`},n=()=>`
  <div class="grid-row grid-gap padding-2 bg-accent-warm-lighter">
    <div class="tablet:grid-col">
      <h4>.sds-button--menu</h4>
      <p class="font-sans-3xs text-base">
        Hover / active states use secondary-dark background + white text; the
        disabled variant uses base-gray border/text on white.
      </p>
      <div class="display-flex flex-align-center" style="gap: 1rem; flex-wrap: wrap;">
        <button class="usa-button sds-button--menu" type="button">
          <span>Menu (base)</span>
        </button>
        <button class="usa-button sds-button--menu usa-button--hover" type="button">
          <span>Menu (hover)</span>
        </button>
        <button class="usa-button sds-button--menu usa-button--active" type="button">
          <span>Menu (active)</span>
        </button>
        <button class="usa-button sds-button--menu usa-button--disabled" type="button" disabled>
          <span>Menu (disabled)</span>
        </button>
      </div>
    </div>
  </div>
`,n.storyName=`Menu button (sds-button--menu)`,r=()=>`
  <style>
    /* Competing rule the SDS override must beat (mirrors the Playwright test).
       Kept at single-element specificity (0,0,1) so the SDS descendant selector
       .sds-filters--horizontal formly-field (0,1,1) wins on merit, not source
       order. */
    .sds-styles-demo formly-field {
      background: #e1f3f8;
      border: 1px solid #00bde3;
      padding: 0.5rem 1rem;
      min-width: 8rem;
    }
    formly-field { margin-top: 40px; }
  </style>
  <div class="sds-styles-demo padding-2">
    <h4>.sds-filters--horizontal</h4>
    <p class="font-sans-3xs text-base">
      Fields lay out in a row and sit flush to the top: the
      <code>.sds-filters--horizontal formly-field { margin-top: 0 }</code> reset
      wins over the seeded <code>formly-field { margin-top: 40px }</code>
      competitor. If the override lost the cascade, the boxes would drop 40px.
    </p>
    <div class="sds-filters--horizontal">
      <formly-field>Filter A</formly-field>
      <formly-field>Filter B</formly-field>
      <formly-field>Filter C</formly-field>
      <div class="search-input">
        <formly-field>Search field</formly-field>
      </div>
    </div>
  </div>
`,r.storyName=`Horizontal filter layout (sds-filters--horizontal)`,i=()=>`
  <div class="padding-2" style="position: relative; min-height: 60vh;">
    <h4>.dialog-slide-out</h4>
    <p class="font-sans-3xs text-base">
      The dark panel is pinned to the right edge, spans the full viewport height,
      and overlays this content — that overlay behavior is
      <code>position: fixed</code>. If the rule lost the cascade it would flow
      inline (static) below this paragraph instead of pinning to the edge.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. This paragraph is
      here as page content for the fixed slideout to overlap. Resize the preview
      to confirm the panel stays pinned to the viewport edge, not the content box.
    </p>
    <div class="dialog-slide-out sds-dialog__container"
         style="background: #1a4480; color: #fff; padding: 1rem; box-shadow: -4px 0 12px rgba(0,0,0,.3); z-index: 999;">
      <strong>Slideout panel</strong>
      <p class="font-sans-3xs" style="color: #fff;">
        position: fixed — right: 0; top: 0; bottom: 0; width: 15rem
      </p>
    </div>
  </div>
`,i.storyName=`Slideout panel (dialog-slide-out)`,n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
  <div class="grid-row grid-gap padding-2 bg-accent-warm-lighter">
    <div class="tablet:grid-col">
      <h4>.sds-button--menu</h4>
      <p class="font-sans-3xs text-base">
        Hover / active states use secondary-dark background + white text; the
        disabled variant uses base-gray border/text on white.
      </p>
      <div class="display-flex flex-align-center" style="gap: 1rem; flex-wrap: wrap;">
        <button class="usa-button sds-button--menu" type="button">
          <span>Menu (base)</span>
        </button>
        <button class="usa-button sds-button--menu usa-button--hover" type="button">
          <span>Menu (hover)</span>
        </button>
        <button class="usa-button sds-button--menu usa-button--active" type="button">
          <span>Menu (active)</span>
        </button>
        <button class="usa-button sds-button--menu usa-button--disabled" type="button" disabled>
          <span>Menu (disabled)</span>
        </button>
      </div>
    </div>
  </div>
\``,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
  <style>
    /* Competing rule the SDS override must beat (mirrors the Playwright test).
       Kept at single-element specificity (0,0,1) so the SDS descendant selector
       .sds-filters--horizontal formly-field (0,1,1) wins on merit, not source
       order. */
    .sds-styles-demo formly-field {
      background: #e1f3f8;
      border: 1px solid #00bde3;
      padding: 0.5rem 1rem;
      min-width: 8rem;
    }
    formly-field { margin-top: 40px; }
  </style>
  <div class="sds-styles-demo padding-2">
    <h4>.sds-filters--horizontal</h4>
    <p class="font-sans-3xs text-base">
      Fields lay out in a row and sit flush to the top: the
      <code>.sds-filters--horizontal formly-field { margin-top: 0 }</code> reset
      wins over the seeded <code>formly-field { margin-top: 40px }</code>
      competitor. If the override lost the cascade, the boxes would drop 40px.
    </p>
    <div class="sds-filters--horizontal">
      <formly-field>Filter A</formly-field>
      <formly-field>Filter B</formly-field>
      <formly-field>Filter C</formly-field>
      <div class="search-input">
        <formly-field>Search field</formly-field>
      </div>
    </div>
  </div>
\``,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
  <div class="padding-2" style="position: relative; min-height: 60vh;">
    <h4>.dialog-slide-out</h4>
    <p class="font-sans-3xs text-base">
      The dark panel is pinned to the right edge, spans the full viewport height,
      and overlays this content \\u2014 that overlay behavior is
      <code>position: fixed</code>. If the rule lost the cascade it would flow
      inline (static) below this paragraph instead of pinning to the edge.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. This paragraph is
      here as page content for the fixed slideout to overlap. Resize the preview
      to confirm the panel stays pinned to the viewport edge, not the content box.
    </p>
    <div class="dialog-slide-out sds-dialog__container"
         style="background: #1a4480; color: #fff; padding: 1rem; box-shadow: -4px 0 12px rgba(0,0,0,.3); z-index: 999;">
      <strong>Slideout panel</strong>
      <p class="font-sans-3xs" style="color: #fff;">
        position: fixed \\u2014 right: 0; top: 0; bottom: 0; width: 15rem
      </p>
    </div>
  </div>
\``,...i.parameters?.docs?.source}}},a=[`MenuButton`,`HorizontalFilter`,`Slideout`]})))()}o();export{r as HorizontalFilter,n as MenuButton,i as Slideout,a as __namedExportsOrder,t as default};