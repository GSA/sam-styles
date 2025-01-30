"use strict";(self.webpackChunk_gsa_sam_sam_styles=self.webpackChunk_gsa_sam_sam_styles||[]).push([[4803],{"./sam-styles/packages/misc/toolbar/toolbar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Toolbar:()=>Toolbar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Miscellaneous/Toolbar"},Toolbar=(()=>'<div class="grid-row margin-105">\n      <div class="tablet:grid-col-auto display-flex position-relative">\n          <div class="sds-toolbar">\n              <div class="sds-toolbar__header">\n                  <a class="sds-toolbar__toogle-btn" href="">\n                      <div class="sds-toolbar__toggle">\n                          <span class="usa-sr-only">Open/Close Toolbar</span>\n                      </div>\n                  </a>\n              </div>\n              <div class="sds-toolbar__content" hidden="hidden">\n                  <div class="sds-accordion" data-allow-multiple="data-allow-multiple">\n                      <div class="sds-accordion__item">\n  \n                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-nav-content" id="accordion-nav-id">\n                              <span class="sds-accordion__title" role="heading">\n                                  <span class="sds-accordion__title-text">\n                                      <div>Navigation</div>\n                                      <div>Selected Category</div>\n                                  </span>\n                                  <span class="sds-accordion__icon"></span>\n                              </span>\n                          </button>\n  \n                          <div id="accordion-nav-content" role="region" aria-labelledby="accordion-nav-id" class="sds-accordion__panel" hidden="">\n                              <div class="sds-accordion__panel-body">\n                                  <nav>\n                                      <ul class="usa-sidenav">\n                                          <li class="usa-sidenav__item">\n                                              <a href="">Parent link</a>\n                                          </li>\n                                          <li class="usa-sidenav__item">\n                                              <a href="" class="usa-current">Current page</a>\n                                              <ul class="usa-sidenav__sublist">\n                                                  <li class="usa-sidenav__item">\n                                                      <a href="">Child link</a>\n                                                  </li>\n                                                  <li class="usa-sidenav__item">\n                                                      <a href="">Child link</a>\n                                                  </li>\n                                                  <li class="usa-sidenav__item">\n                                                      <a href="">Child link</a>\n                                                  </li>\n                                                  <li class="usa-sidenav__item">\n                                                      <a href="">Child link</a>\n                                                  </li>\n                                              </ul>\n                                          </li>\n                                          <li class="usa-sidenav__item">\n                                              <a href="">Parent link</a>\n                                          </li>\n                                      </ul>\n                                  </nav>\n                              </div>\n                          </div>\n                      </div>\n                      <div class="sds-accordion__item">\n  \n                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-filters-content" id="accordion-filters-id">\n                              <span class="sds-accordion__title" role="heading">\n                                  Filters\n                                  <span class="sds-accordion__icon"></span>\n                              </span>\n                          </button>\n  \n                          <div id="accordion-filters-content" role="region" aria-labelledby="accordion-filters-id" class="sds-accordion__panel" hidden="">\n                              <div class="sds-accordion__panel-body">\n                                  <div class="sds-accordion sds-accordion--basic" data-allow-multiple="data-allow-multiple">\n                                      <div class="sds-accordion__item">\n  \n                                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-serv-class-content" id="accordion-serv-class-id">\n                                              <span class="sds-accordion__title" role="heading">\n                                                  Service Classifications\n                                                  <span class="sds-accordion__icon"></span>\n                                              </span>\n                                          </button>\n  \n                                          <div id="accordion-serv-class-content" role="region" aria-labelledby="accordion-serv-class-id" class="sds-accordion__panel" hidden="">\n                                              <div class="sds-accordion__panel-body">\n                                                  <label class="usa-label" for="input-type-naics">NAICS</label>\n                                                  <input class="usa-input" id="input-type-naics" name="input-type-naics" type="text" />\n                                                  <div class="selected-chips margin-top-05">\n                                                      <span class="sds-tag sds-tag--chip">\n                                                          111140 -- Wheat Farming\n                                                          <button class="sds-tag__close">\n                                                              <span class="fas fa-times" aria-hidden="true"></span>\n                                                          </button>\n                                                      </span>\n                                                      <span class="sds-tag sds-tag--chip">\n                                                          212222 -- Silver Ore Mining\n                                                          <button class="sds-tag__close">\n                                                              <span class="fas fa-times" aria-hidden="true"></span>\n                                                          </button>\n                                                      </span>\n                                                      <span class="sds-tag sds-tag--chip">\n                                                          541850 -- Outdoor Advertising\n                                                          <button class="sds-tag__close">\n                                                              <span class="fas fa-times" aria-hidden="true"></span>\n                                                          </button>\n                                                      </span>\n                                                  </div>\n                                                  <label class="usa-label" for="input-type-psc">PSC</label>\n                                                  <input class="usa-input" id="input-type-psc" name="input-type-psc" type="text" />\n                                              </div>\n                                          </div>\n                                      </div>\n                                      <div class="sds-accordion__item">\n  \n                                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-entity-content" id="accordion-entity-id">\n                                              <span class="sds-accordion__title" role="heading">\n                                                  Entity Name/UEI\n                                                  <span class="sds-accordion__icon"></span>\n                                              </span>\n                                          </button>\n  \n                                          <div id="accordion-entity-content" role="region" aria-labelledby="accordion-entity-id" class="sds-accordion__panel" hidden="">\n                                              <div class="sds-accordion__panel-body">\n                                                  <label class="usa-label" for="input-type-entity">Name</label>\n                                                  <input class="usa-input" id="input-type-entity" name="input-type-entity" type="text" />\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div></div>\n      </div>\n      <div class="tablet:grid-col sds-page__content">\n          <div>\n              Showing 1 to 10 of 21 registrations\n          </div>\n  \n          Frontier Allied Partners, Inc\n          <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet faucibus arcu id bibendum. Mauris eleifend massa purus, eu volutpat erat placerat egestas.\n          </p>\n      </div>\n  </div>\n  \n  <footer class="usa-footer usa-footer--big" role="contentinfo">\n      <div class="grid-container usa-footer__return-to-top">\n          <a href="#">Return to top</a>\n      </div>\n      <div class="usa-footer__primary-section">\n          <div class="grid-container">\n              <div class="grid-row grid-gap">\n                  <div class="mobile-lg:grid-col-12 tablet:grid-col-4">\n                      <div class="usa-footer__logo grid-row mobile-lg:grid-gap-1 margin-top-3">\n                          <div class="mobile-lg:grid-col-3 mobile-lg:grid-offset-3 tablet:grid-offset-none tablet:grid-col-auto">\n                              <a class="usa-footer__logo-text" href="http://gsa.gov">\n                                  GSA.gov\n                              </a>\n                          </div>\n                          <div class="mobile-lg:grid-col-4 tablet:grid-col-auto">\n                              <h3 class="usa-footer__logo-heading">\n                                  General Services Administration\n  \n                          </div>\n                      </div>\n                  </div>\n                  <div class="mobile-lg:grid-col-12 tablet:grid-col-8">\n                      <nav class="usa-footer__nav">\n                          <div class="grid-row grid-gap-4">\n                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">\n                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n                                      <span class="usa-footer__primary-link">About beta.SAM.gov</span>\n                                      <ul class="usa-list usa-list--unstyled">\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Explore Our Community</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Release Notes</a>\n                                          </li>\n                                      </ul>\n                                  </section>\n                              </div>\n                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">\n                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n                                      <span class="usa-footer__primary-link">Our Partners</span>\n                                      <ul class="usa-list usa-list--unstyled">\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Aquisition.gov</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">USASpending.gov</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Grants.gov</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">More Partners</a>\n                                          </li>\n                                      </ul>\n                                  </section>\n                              </div>\n                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">\n                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n                                      <span class="usa-footer__primary-link">Customer Service</span>\n                                      <ul class="usa-list usa-list--unstyled">\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Learning Center</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Contact Federal Service Desk</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Resources</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Freedom of Information Act</a>\n                                          </li>\n                                      </ul>\n                                  </section>\n                              </div>\n                          </div>\n                      </nav>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="usa-footer__secondary-section">\n          <div class="grid-container">\n              <div class="grid-row">\n                  <div class="grid-col-12">\n                      <p class="font-body-2xs line-height-sans-4 margin-top-0">\n                          This is a U.S. General Services Administration Federal Government\n                          computer system that is\n                          <strong>"FOR OFFICIAL USE ONLY."</strong> This system is subject to\n                          monitoring. Individuals found performing unauthorized activities are\n                          subject to disciplinary action including criminal prosecution.\n                      </p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </footer>\n  ').bind({});Toolbar.parameters={...Toolbar.parameters,docs:{...Toolbar.parameters?.docs,source:{originalSource:'() => {\n  return `<div class="grid-row margin-105">\n      <div class="tablet:grid-col-auto display-flex position-relative">\n          <div class="sds-toolbar">\n              <div class="sds-toolbar__header">\n                  <a class="sds-toolbar__toogle-btn" href="">\n                      <div class="sds-toolbar__toggle">\n                          <span class="usa-sr-only">Open/Close Toolbar</span>\n                      </div>\n                  </a>\n              </div>\n              <div class="sds-toolbar__content" hidden="hidden">\n                  <div class="sds-accordion" data-allow-multiple="data-allow-multiple">\n                      <div class="sds-accordion__item">\n  \n                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-nav-content" id="accordion-nav-id">\n                              <span class="sds-accordion__title" role="heading">\n                                  <span class="sds-accordion__title-text">\n                                      <div>Navigation</div>\n                                      <div>Selected Category</div>\n                                  </span>\n                                  <span class="sds-accordion__icon"></span>\n                              </span>\n                          </button>\n  \n                          <div id="accordion-nav-content" role="region" aria-labelledby="accordion-nav-id" class="sds-accordion__panel" hidden="">\n                              <div class="sds-accordion__panel-body">\n                                  <nav>\n                                      <ul class="usa-sidenav">\n                                          <li class="usa-sidenav__item">\n                                              <a href="">Parent link</a>\n                                          </li>\n                                          <li class="usa-sidenav__item">\n                                              <a href="" class="usa-current">Current page</a>\n                                              <ul class="usa-sidenav__sublist">\n                                                  <li class="usa-sidenav__item">\n                                                      <a href="">Child link</a>\n                                                  </li>\n                                                  <li class="usa-sidenav__item">\n                                                      <a href="">Child link</a>\n                                                  </li>\n                                                  <li class="usa-sidenav__item">\n                                                      <a href="">Child link</a>\n                                                  </li>\n                                                  <li class="usa-sidenav__item">\n                                                      <a href="">Child link</a>\n                                                  </li>\n                                              </ul>\n                                          </li>\n                                          <li class="usa-sidenav__item">\n                                              <a href="">Parent link</a>\n                                          </li>\n                                      </ul>\n                                  </nav>\n                              </div>\n                          </div>\n                      </div>\n                      <div class="sds-accordion__item">\n  \n                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-filters-content" id="accordion-filters-id">\n                              <span class="sds-accordion__title" role="heading">\n                                  Filters\n                                  <span class="sds-accordion__icon"></span>\n                              </span>\n                          </button>\n  \n                          <div id="accordion-filters-content" role="region" aria-labelledby="accordion-filters-id" class="sds-accordion__panel" hidden="">\n                              <div class="sds-accordion__panel-body">\n                                  <div class="sds-accordion sds-accordion--basic" data-allow-multiple="data-allow-multiple">\n                                      <div class="sds-accordion__item">\n  \n                                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-serv-class-content" id="accordion-serv-class-id">\n                                              <span class="sds-accordion__title" role="heading">\n                                                  Service Classifications\n                                                  <span class="sds-accordion__icon"></span>\n                                              </span>\n                                          </button>\n  \n                                          <div id="accordion-serv-class-content" role="region" aria-labelledby="accordion-serv-class-id" class="sds-accordion__panel" hidden="">\n                                              <div class="sds-accordion__panel-body">\n                                                  <label class="usa-label" for="input-type-naics">NAICS</label>\n                                                  <input class="usa-input" id="input-type-naics" name="input-type-naics" type="text" />\n                                                  <div class="selected-chips margin-top-05">\n                                                      <span class="sds-tag sds-tag--chip">\n                                                          111140 -- Wheat Farming\n                                                          <button class="sds-tag__close">\n                                                              <span class="fas fa-times" aria-hidden="true"></span>\n                                                          </button>\n                                                      </span>\n                                                      <span class="sds-tag sds-tag--chip">\n                                                          212222 -- Silver Ore Mining\n                                                          <button class="sds-tag__close">\n                                                              <span class="fas fa-times" aria-hidden="true"></span>\n                                                          </button>\n                                                      </span>\n                                                      <span class="sds-tag sds-tag--chip">\n                                                          541850 -- Outdoor Advertising\n                                                          <button class="sds-tag__close">\n                                                              <span class="fas fa-times" aria-hidden="true"></span>\n                                                          </button>\n                                                      </span>\n                                                  </div>\n                                                  <label class="usa-label" for="input-type-psc">PSC</label>\n                                                  <input class="usa-input" id="input-type-psc" name="input-type-psc" type="text" />\n                                              </div>\n                                          </div>\n                                      </div>\n                                      <div class="sds-accordion__item">\n  \n                                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-entity-content" id="accordion-entity-id">\n                                              <span class="sds-accordion__title" role="heading">\n                                                  Entity Name/UEI\n                                                  <span class="sds-accordion__icon"></span>\n                                              </span>\n                                          </button>\n  \n                                          <div id="accordion-entity-content" role="region" aria-labelledby="accordion-entity-id" class="sds-accordion__panel" hidden="">\n                                              <div class="sds-accordion__panel-body">\n                                                  <label class="usa-label" for="input-type-entity">Name</label>\n                                                  <input class="usa-input" id="input-type-entity" name="input-type-entity" type="text" />\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div></div>\n      </div>\n      <div class="tablet:grid-col sds-page__content">\n          <div>\n              Showing 1 to 10 of 21 registrations\n          </div>\n  \n          Frontier Allied Partners, Inc\n          <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet faucibus arcu id bibendum. Mauris eleifend massa purus, eu volutpat erat placerat egestas.\n          </p>\n      </div>\n  </div>\n  \n  <footer class="usa-footer usa-footer--big" role="contentinfo">\n      <div class="grid-container usa-footer__return-to-top">\n          <a href="#">Return to top</a>\n      </div>\n      <div class="usa-footer__primary-section">\n          <div class="grid-container">\n              <div class="grid-row grid-gap">\n                  <div class="mobile-lg:grid-col-12 tablet:grid-col-4">\n                      <div class="usa-footer__logo grid-row mobile-lg:grid-gap-1 margin-top-3">\n                          <div class="mobile-lg:grid-col-3 mobile-lg:grid-offset-3 tablet:grid-offset-none tablet:grid-col-auto">\n                              <a class="usa-footer__logo-text" href="http://gsa.gov">\n                                  GSA.gov\n                              </a>\n                          </div>\n                          <div class="mobile-lg:grid-col-4 tablet:grid-col-auto">\n                              <h3 class="usa-footer__logo-heading">\n                                  General Services Administration\n  \n                          </div>\n                      </div>\n                  </div>\n                  <div class="mobile-lg:grid-col-12 tablet:grid-col-8">\n                      <nav class="usa-footer__nav">\n                          <div class="grid-row grid-gap-4">\n                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">\n                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n                                      <span class="usa-footer__primary-link">About beta.SAM.gov</span>\n                                      <ul class="usa-list usa-list--unstyled">\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Explore Our Community</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Release Notes</a>\n                                          </li>\n                                      </ul>\n                                  </section>\n                              </div>\n                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">\n                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n                                      <span class="usa-footer__primary-link">Our Partners</span>\n                                      <ul class="usa-list usa-list--unstyled">\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Aquisition.gov</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">USASpending.gov</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Grants.gov</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">More Partners</a>\n                                          </li>\n                                      </ul>\n                                  </section>\n                              </div>\n                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">\n                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">\n                                      <span class="usa-footer__primary-link">Customer Service</span>\n                                      <ul class="usa-list usa-list--unstyled">\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Learning Center</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Contact Federal Service Desk</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Resources</a>\n                                          </li>\n                                          <li class="usa-footer__secondary-link">\n                                              <a href="javascript:void(0);">Freedom of Information Act</a>\n                                          </li>\n                                      </ul>\n                                  </section>\n                              </div>\n                          </div>\n                      </nav>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="usa-footer__secondary-section">\n          <div class="grid-container">\n              <div class="grid-row">\n                  <div class="grid-col-12">\n                      <p class="font-body-2xs line-height-sans-4 margin-top-0">\n                          This is a U.S. General Services Administration Federal Government\n                          computer system that is\n                          <strong>"FOR OFFICIAL USE ONLY."</strong> This system is subject to\n                          monitoring. Individuals found performing unauthorized activities are\n                          subject to disciplinary action including criminal prosecution.\n                      </p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </footer>\n  `;\n}',...Toolbar.parameters?.docs?.source}}};const __namedExportsOrder=["Toolbar"]}}]);