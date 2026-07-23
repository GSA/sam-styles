// Storybook coverage for SDS style classes that previously had no rendered story
// and could only be verified via DevTools injection or Playwright.
//
// These classes ship in `sam-styles` but are normally composed by the consuming
// SAM.gov Angular app (e.g. `formly-field`, `sds-dialog__container`, dropdown
// menu triggers). This library has no Angular runtime, so we render the same
// class structure as static HTML. The compiled stylesheet is loaded globally via
// `.storybook/preview.js`, so the real cascade applies.
//
// Related: PR #756 (declaration-no-important cleanup) and follow-up issue #759
// (Storybook style regression coverage).

export default {
  title: "SDS Styles/Overrides",
};

// ── Menu / Action Menu trigger buttons (menu.scss) ─────────────────────────────
// `.sds-button--menu` had no story; states were DevTools-injection only.
// Renders base / hover / active / disabled so reviewers can eyeball the
// secondary-dark background + white text on hover/active and the base-gray
// disabled treatment without opening DevTools.
export const MenuButton = () => `
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
`;
MenuButton.storyName = "Menu button (sds-button--menu)";

// ── Horizontal filter layout (filter.scss) ─────────────────────────────────────
// `.sds-filters--horizontal formly-field` resets margin-top to 0 (was
// `0 !important`). Renders the class structure as static HTML with a competing
// margin so the reset is visually demonstrable. NOTE: `formly-field` is a custom
// element that has no default styling until the SDS rule applies — we deliberately
// seed a global `formly-field { margin-top: 40px }` competitor via inline <style>
// so the override winning is visible (the fields sit flush to the top, not pushed
// down 40px).
export const HorizontalFilter = () => `
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
`;
HorizontalFilter.storyName =
  "Horizontal filter layout (sds-filters--horizontal)";

// ── Slideout panel (slideout.scss) ─────────────────────────────────────────────
// `.dialog-slide-out` is `position: fixed` (was `fixed !important`). It normally
// composes with the Angular `.sds-dialog__container`. Rendered here with a
// visible background + a "page content" backdrop so you can see it pin to the
// right edge, span full height, and overlay content (proving position: fixed).
export const Slideout = () => `
  <div class="padding-2" style="position: relative; min-height: 60vh;">
    <h4>.dialog-slide-out</h4>
    <p class="font-sans-3xs text-base">
      The dark panel is pinned to the right edge, spans the full viewport height,
      and overlays this content \u2014 that overlay behavior is
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
        position: fixed \u2014 right: 0; top: 0; bottom: 0; width: 15rem
      </p>
    </div>
  </div>
`;
Slideout.storyName = "Slideout panel (dialog-slide-out)";
