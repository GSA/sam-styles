export default {
  title: "Form Elements/Checkboxes",
};
const Template = () => {
  return ` <div class="usa-grid">
  <div class="grid-row">
      <div class="grid-col-fill tablet:grid-col">
          <h2 class="margin-0">Single Level</h2>
          <form class="usa-form">
              <fieldset class="usa-fieldset">
                  <legend class="usa-sr-only">Historical figures 1</legend>
                  <div class="usa-checkbox">
                      <input class="usa-checkbox__input" id="truth" type="checkbox" name="historical-figures-1" value="truth" checked="checked">
                      <label class="usa-checkbox__label" for="truth">Sojourner Truth</label>
                  </div>
                  <div class="usa-checkbox">
                      <input class="usa-checkbox__input" id="douglass" type="checkbox" name="historical-figures-1" value="douglass">
                      <label class="usa-checkbox__label" for="douglass">Frederick Douglass</label>
                  </div>
                  <div class="usa-checkbox">
                      <input class="usa-checkbox__input" id="washington" type="checkbox" name="historical-figures-1" value="washington">
                      <label class="usa-checkbox__label" for="washington">Booker T. Washington</label>
                  </div>
                  <div class="usa-checkbox">
                      <input class="usa-checkbox__input" id="carver" type="checkbox" name="historical-figures-1" disabled="disabled">
                      <label class="usa-checkbox__label" for="carver">George Washington Carver</label>
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
                          <div class="usa-checkbox">
                              <input class="usa-checkbox__input" id="lincoln" type="checkbox" name="historical-figures-1" value="lincoln" checked="checked">
                              <label class="usa-checkbox__label" for="lincoln" aria-checked="mixed">Abraham Lincoln</label>
                          </div>
                      </li>
                      <ul class="margin-left-4 usa-list--unstyled">
                          <li>
                              <div class="usa-checkbox">
                                  <input class="usa-checkbox__input" id="smith" type="checkbox" name="historical-figures-1" value="smith">
                                  <label class="usa-checkbox__label" for="smith">John Smith</label>
                              </div>
                          </li>
                          <li>
                              <div class="usa-checkbox">
                                  <input class="usa-checkbox__input" id="pellegrino" type="checkbox" name="historical-figures-1" value="pellegrino">
                                  <label class="usa-checkbox__label" for="pellegrino">San Pellegrino</label>
                              </div>
                          </li>
                          <li>
                              <div class="usa-checkbox">
                                  <input class="usa-checkbox__input" id="adams" type="checkbox" name="historical-figures-1" value="adams">
                                  <label class="usa-checkbox__label" for="adams">John Adams</label>
                              </div>
                          </li>
                      </ul>
                      <li>
                          <div class="usa-checkbox">
                              <input class="usa-checkbox__input" id="beamer" type="checkbox" name="historical-figures-1" value="beamer">
                              <label class="usa-checkbox__label" for="beamer">Frank Beamer</label>
                          </div>
                      </li>
                      <li>
                          <div class="usa-checkbox">
                              <input class="usa-checkbox__input" id="rashington" type="checkbox" name="historical-figures-1" value="roosevelt">
                              <label class="usa-checkbox__label" for="roosevelt">Franklin D. Roosevelt</label>
                          </div>
                      </li>
                      <li>
                          <div class="usa-checkbox">
                              <input class="usa-checkbox__input" id="franklin" type="checkbox" name="historical-figures-1" disabled="disabled">
                              <label class="usa-checkbox__label" for="franklin">Ben Franklin</label>
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



export const Checkboxes = Template.bind({});
//export const CheckboxTile = TileTemplate.bind({});
