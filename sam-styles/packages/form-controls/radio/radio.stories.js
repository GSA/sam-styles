export default {
  title: "Form Elements/Radio",
};
const Template = () => {
  return `<div class="usa-grid">
  <div class="grid-row">
      <div class="grid-col-fill tablet:grid-col">
          <h2 class="margin-0">Single Level</h2>
          <form class="usa-form">
              <fieldset class="usa-fieldset">
                  <legend class="usa-sr-only">Historical figures 2</legend>
                  <div class="usa-radio">
                      <input class="usa-radio__input" id="stanton" type="radio" checked="checked" name="historical-figures-2" value="stanton">
                      <label class="usa-radio__label" for="stanton">Elizabeth Cady Stanton</label>
                  </div>
                  <div class="usa-radio">
                      <input class="usa-radio__input" id="anthony" type="radio" name="historical-figures-2" value="anthony">
                      <label class="usa-radio__label" for="anthony">Susan B. Anthony</label>
                  </div>
                  <div class="usa-radio">
                      <input class="usa-radio__input" id="tubman" type="radio" name="historical-figures-2" value="tubman">
                      <label class="usa-radio__label" for="tubman">Harriet Tubman</label>
                  </div>
                  <div class="usa-radio">
                      <input class="usa-radio__input" id="earhart" type="radio" name="historical-figures-2" disabled="disabled">
                      <label class="usa-radio__label" for="earhart">Amelia Earhart</label>
                  </div>
              </fieldset>
          </form>
      </div>
      <div class="grid-col-fill tablet:grid-col">
          <h2 class="margin-0">Two Levels</h2>
          <form class="usa-form">
              <fieldset class="usa-fieldset">
                  <legend class="usa-sr-only">Historical figures 1</legend>
                  <ul class="usa-list--unstyled">
                      <li>
                          <div class="usa-radio">
                              <input class="usa-radio__input" id="lincoln" type="checkbox" name="historical-figures-1" value="lincoln" checked="checked">
                              <label class="usa-radio__label" for="lincoln">Abraham Lincoln</label>
                          </div>
                      </li>
                      <ul class="margin-left-4 usa-list--unstyled">
                          <li>
                              <div class="usa-radio">
                                  <input class="usa-radio__input" id="smith" type="checkbox" name="historical-figures-1" value="smith">
                                  <label class="usa-radio__label" for="smith">John Smith</label>
                              </div>
                          </li>
                          <li>
                              <div class="usa-radio">
                                  <input class="usa-radio__input" id="pellegrino" type="checkbox" name="historical-figures-1" value="pellegrino">
                                  <label class="usa-radio__label" for="pellegrino">San Pellegrino</label>
                              </div>
                          </li>
                          <li>
                              <div class="usa-radio">
                                  <input class="usa-radio__input" id="adams" type="checkbox" name="historical-figures-1" value="adams">
                                  <label class="usa-radio__label" for="adams">John Adams</label>
                              </div>
                          </li>
                      </ul>
                      <li>
                          <div class="usa-radio">
                              <input class="usa-radio__input" id="beamer" type="checkbox" name="historical-figures-1" value="beamer">
                              <label class="usa-radio__label" for="beamer">Frank Beamer</label>
                          </div>
                      </li>
                      <li>
                          <div class="usa-radio">
                              <input class="usa-radio__input" id="rashington" type="checkbox" name="historical-figures-1" value="roosevelt">
                              <label class="usa-radio__label" for="roosevelt">Franklin D. Roosevelt</label>
                          </div>
                      </li>
                      <li>
                          <div class="usa-radio">
                              <input class="usa-radio__input" id="franklin" type="checkbox" name="historical-figures-1" disabled="disabled">
                              <label class="usa-radio__label" for="franklin">Ben Franklin</label>
                          </div>
                      </li>
                  </ul>
              </fieldset>
          </form>
      </div>
  </div>
</div>
`;
};

export const Radio = Template.bind({});

