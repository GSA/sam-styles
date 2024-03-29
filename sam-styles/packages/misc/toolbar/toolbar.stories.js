export default {
    title: "Miscellaneous/Toolbar",
  };
  const Template = () => {
      return `<div class="grid-row margin-105">
      <div class="tablet:grid-col-auto display-flex position-relative">
          <div class="sds-toolbar">
              <div class="sds-toolbar__header">
                  <a class="sds-toolbar__toogle-btn" href="">
                      <div class="sds-toolbar__toggle">
                          <span class="usa-sr-only">Open/Close Toolbar</span>
                      </div>
                  </a>
              </div>
              <div class="sds-toolbar__content" hidden="hidden">
                  <div class="sds-accordion" data-allow-multiple="data-allow-multiple">
                      <div class="sds-accordion__item">
  
                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-nav-content" id="accordion-nav-id">
                              <span class="sds-accordion__title" role="heading">
                                  <span class="sds-accordion__title-text">
                                      <div>Navigation</div>
                                      <div>Selected Category</div>
                                  </span>
                                  <span class="sds-accordion__icon"></span>
                              </span>
                          </button>
  
                          <div id="accordion-nav-content" role="region" aria-labelledby="accordion-nav-id" class="sds-accordion__panel" hidden="">
                              <div class="sds-accordion__panel-body">
                                  <nav>
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
                              </div>
                          </div>
                      </div>
                      <div class="sds-accordion__item">
  
                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-filters-content" id="accordion-filters-id">
                              <span class="sds-accordion__title" role="heading">
                                  Filters
                                  <span class="sds-accordion__icon"></span>
                              </span>
                          </button>
  
                          <div id="accordion-filters-content" role="region" aria-labelledby="accordion-filters-id" class="sds-accordion__panel" hidden="">
                              <div class="sds-accordion__panel-body">
                                  <div class="sds-accordion sds-accordion--basic" data-allow-multiple="data-allow-multiple">
                                      <div class="sds-accordion__item">
  
                                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-serv-class-content" id="accordion-serv-class-id">
                                              <span class="sds-accordion__title" role="heading">
                                                  Service Classifications
                                                  <span class="sds-accordion__icon"></span>
                                              </span>
                                          </button>
  
                                          <div id="accordion-serv-class-content" role="region" aria-labelledby="accordion-serv-class-id" class="sds-accordion__panel" hidden="">
                                              <div class="sds-accordion__panel-body">
                                                  <label class="usa-label" for="input-type-naics">NAICS</label>
                                                  <input class="usa-input" id="input-type-naics" name="input-type-naics" type="text" />
                                                  <div class="selected-chips margin-top-05">
                                                      <span class="sds-tag sds-tag--chip">
                                                          111140 -- Wheat Farming
                                                          <button class="sds-tag__close">
                                                              <span class="fas fa-times" aria-hidden="true"></span>
                                                          </button>
                                                      </span>
                                                      <span class="sds-tag sds-tag--chip">
                                                          212222 -- Silver Ore Mining
                                                          <button class="sds-tag__close">
                                                              <span class="fas fa-times" aria-hidden="true"></span>
                                                          </button>
                                                      </span>
                                                      <span class="sds-tag sds-tag--chip">
                                                          541850 -- Outdoor Advertising
                                                          <button class="sds-tag__close">
                                                              <span class="fas fa-times" aria-hidden="true"></span>
                                                          </button>
                                                      </span>
                                                  </div>
                                                  <label class="usa-label" for="input-type-psc">PSC</label>
                                                  <input class="usa-input" id="input-type-psc" name="input-type-psc" type="text" />
                                              </div>
                                          </div>
                                      </div>
                                      <div class="sds-accordion__item">
  
                                          <button aria-expanded="false" class="sds-accordion__trigger" aria-controls="accordion-entity-content" id="accordion-entity-id">
                                              <span class="sds-accordion__title" role="heading">
                                                  Entity Name/UEI
                                                  <span class="sds-accordion__icon"></span>
                                              </span>
                                          </button>
  
                                          <div id="accordion-entity-content" role="region" aria-labelledby="accordion-entity-id" class="sds-accordion__panel" hidden="">
                                              <div class="sds-accordion__panel-body">
                                                  <label class="usa-label" for="input-type-entity">Name</label>
                                                  <input class="usa-input" id="input-type-entity" name="input-type-entity" type="text" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div></div>
      </div>
      <div class="tablet:grid-col sds-page__content">
          <div>
              Showing 1 to 10 of 21 registrations
          </div>
  
          Frontier Allied Partners, Inc
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet faucibus arcu id bibendum. Mauris eleifend massa purus, eu volutpat erat placerat egestas.
          </p>
      </div>
  </div>
  
  <footer class="usa-footer usa-footer--big" role="contentinfo">
      <div class="grid-container usa-footer__return-to-top">
          <a href="#">Return to top</a>
      </div>
      <div class="usa-footer__primary-section">
          <div class="grid-container">
              <div class="grid-row grid-gap">
                  <div class="mobile-lg:grid-col-12 tablet:grid-col-4">
                      <div class="usa-footer__logo grid-row mobile-lg:grid-gap-1 margin-top-3">
                          <div class="mobile-lg:grid-col-3 mobile-lg:grid-offset-3 tablet:grid-offset-none tablet:grid-col-auto">
                              <a class="usa-footer__logo-text" href="http://gsa.gov">
                                  GSA.gov
                              </a>
                          </div>
                          <div class="mobile-lg:grid-col-4 tablet:grid-col-auto">
                              <h3 class="usa-footer__logo-heading">
                                  General Services Administration
  
                          </div>
                      </div>
                  </div>
                  <div class="mobile-lg:grid-col-12 tablet:grid-col-8">
                      <nav class="usa-footer__nav">
                          <div class="grid-row grid-gap-4">
                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">
                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                                      <span class="usa-footer__primary-link">About beta.SAM.gov</span>
                                      <ul class="usa-list usa-list--unstyled">
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">Explore Our Community</a>
                                          </li>
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">Release Notes</a>
                                          </li>
                                      </ul>
                                  </section>
                              </div>
                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">
                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                                      <span class="usa-footer__primary-link">Our Partners</span>
                                      <ul class="usa-list usa-list--unstyled">
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">Aquisition.gov</a>
                                          </li>
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">USASpending.gov</a>
                                          </li>
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">Grants.gov</a>
                                          </li>
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">More Partners</a>
                                          </li>
                                      </ul>
                                  </section>
                              </div>
                              <div class="mobile-lg:grid-col-12 desktop:grid-col-4">
                                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                                      <span class="usa-footer__primary-link">Customer Service</span>
                                      <ul class="usa-list usa-list--unstyled">
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">Learning Center</a>
                                          </li>
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">Contact Federal Service Desk</a>
                                          </li>
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">Resources</a>
                                          </li>
                                          <li class="usa-footer__secondary-link">
                                              <a href="javascript:void(0);">Freedom of Information Act</a>
                                          </li>
                                      </ul>
                                  </section>
                              </div>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
      <div class="usa-footer__secondary-section">
          <div class="grid-container">
              <div class="grid-row">
                  <div class="grid-col-12">
                      <p class="font-body-2xs line-height-sans-4 margin-top-0">
                          This is a U.S. General Services Administration Federal Government
                          computer system that is
                          <strong>"FOR OFFICIAL USE ONLY."</strong> This system is subject to
                          monitoring. Individuals found performing unauthorized activities are
                          subject to disciplinary action including criminal prosecution.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  `;
  };
  export const Toolbar = Template.bind({});
  