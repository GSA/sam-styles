export default {
    title: "Miscellaneous/SearchLayout",
  };
  const Template = () => {
      return `<div class="margin-3 grid-row grid-gap">
      <div class="grid-col-12 tablet-lg:grid-col-3 margin-top-2">
          <div class="sds-sidepanel">
              <div class="sds-card mobile-only ">
                  <div class="sds-card__header grid-row  sds-card__header--accent-cool">
                      <button aria-label="Cancel Advanced Search" class="sds-button sds-button--circular sds-button--white">
                          <fa-icon>
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10 fa-fw" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                  <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                                  </path>
                              </svg>
                          </fa-icon>
                      </button>
                      <div class="margin-x-auto">
                          <h2 class="sds-card__title margin-top-1 margin-left-neg-2">Advanced Search</h2>
                      </div>
                  </div>
              </div>
              <div class="sds-card sds-card--collapsible">
                  <div class="sds-card__header sds-card__header--action" aria-expanded="false">
                      <div class="sds-card__title">Select Domain<br />
                          <span class="sds-card__subtitle">Contract Opportunities</span>
                      </div>
                      <div class="sds-card__action sds-card__collapse"></div>
                  </div>
                  <div class="sds-card__body sds-card__body--accent-cool">
                      <nav>
                          <ul class="usa-sidenav usa-sidenav--styled">
                              <li class="usa-sidenav__item">
                                  <a href="">All Domains</a>
                              </li>
                              <li class="usa-sidenav__item usa-current">
                                  <a href="">Contract Opportunities</a>
                              </li>
                              <li class="usa-sidenav__item">
                                  <a href="">Contract Data</a>
                              </li>
                              <li class="usa-sidenav__item">
                                  <a href="">Federal Assistance</a>
                              </li>
                              <li class="usa-sidenav__item">
                                  <a href="">Entity Information</a>
                              </li>
                              <li class="usa-sidenav__item">
                                  <a href="">Federal Hierarchy</a>
                              </li>
                              <li class="usa-sidenav__item">
                                  <a href="">Wage Determinations</a>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
  
              <div class="sds-card  sds-card--collapsible">
                  <div class="sds-card__header sds-card__header--action" aria-expanded="true">
                      <div class="sds-card__title">Filter By</div>
                      <div class="sds-card__action sds-card__collapse"></div>
                  </div>
                  <div class="sds-card__body sds-card__body sds-card__body--accent-cool">
  
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
              <div class="sds-card  sds-card--collapsible  mobile-only">
                  <div class="sds-card__body sds-card__body grid-row">
                      <button aria-label="Apply" class="usa-button grid-col-12">Apply</button>
                  </div>
              </div>
          </div>
      </div>
      <div class="grid-col-12 tablet-lg:grid-col-7  margin-top-2">
          <div class="sds-card sds-card--vertical sds-card--shadowed sds-card--bordered">
              <div class="sds-card__header">
                <i class="bi bi-search size-6x"></i>
              </div>
              <div class="sds-card__body margin-2">
                  <h1 class="sds-card__title">No matches found</h1>
                  <p>We couldn't find a match for your search criteria.</p>
                  <p> Please try another search or go back to previous results.</p>
                  <div class="margin-top-3">
                      <button class="usa-button usa-button--outline">Go Back</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  `;
  };
  export const SearchLayout = Template.bind({});
  