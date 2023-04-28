export default {
    title: "Form Elements/AddressForm",
    argTypes: {
      label: {type: "string"},
      classTypes: {
        control: {type: "select"},
        options: ["", "usa-focus", "usa-input--error", "usa-input--success"],
      },
    },
  };
  const Template = (args) => {
    return ` 
    <div class="sds-form-wrapper grid-row">
    <form class="sds-form usa-form usa-form--large">
        <fieldset class="usa-fieldset">

            <legend class="usa-legend">Physical Address</legend>
            <div class="sds-form-text">
                Your physical address is the street address of the primary office or other building where your entity is located. A post office box may not be used as your physical…
            </div>

            <label class="usa-label" for="options">Country</label>
            <select class="usa-select" name="options" id="options">
                <option value="value">- Select -</option>
                <option value="value1">USA</option>
                <option value="value2">Canada</option>
            </select>

            <label class="usa-label" for="mailing-address-1">Street address 1</label>
            <input class="usa-input" id="mailing-address-1" name="mailing-address-1" type="text">

            <label class="usa-label" for="mailing-address-2">Street address 2
                <span class="usa-hint">(optional)</span></label>
            <input class="usa-input" id="mailing-address-2" name="mailing-address-2" type="text">

            <label class="usa-label" for="zip">ZIP Code (+4)</label>
            <input class="usa-input usa-input--medium" id="zip" name="zip" type="text" pattern="[\d]{5}(-[\d]{4})?">

            <div class="grid-row grid-gap">
                <div class="mobile-lg:grid-col">
                    <label class="usa-label" for="city">City</label>
                    <input class="usa-input" id="city" name="city" type="text">
                </div>
                <div class="mobile-lg:grid-col">
                    <label class="usa-label" for="state">State</label>
                    <select class="usa-select" id="state" name="state">
                        <option value="value">- Select -</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                        <option value="AA">AA - Armed Forces Americas</option>
                        <option value="AE">AE - Armed Forces Africa</option>
                        <option value="AE">AE - Armed Forces Canada</option>
                        <option value="AE">AE - Armed Forces Europe</option>
                        <option value="AE">AE - Armed Forces Middle East</option>
                        <option value="AP">AP - Armed Forces Pacific</option>
                    </select>
                </div>
            </div>

            <label class="usa-label" for="mailing-address-2">Congressional District
                <span class="usa-hint">(optional)</span></label>
            <input class="usa-input" id="district" name="district" type="text">

            <h3>Phone Number</h3>
            <p>Your phone number is the primary number associated with your vendor</p>

            <div class="grid-row grid-gap">
                <div class="mobile-lg:grid-col">
                    <label class="usa-label" for="code">Country Code</label>
                    <input class="usa-input" id="code" name="code" type="text">
                </div>
                <div class="mobile-lg:grid-col">
                    <label class="usa-label" for="state">Phone</label>
                    <input class="usa-input" id="phone" name="phone" type="text">
                </div>
                <div class="mobile-lg:grid-col sds-form-extension">
                    <label class="usa-label" for="ext">Extension
                        <span class="usa-hint">(optional)</span></label>
                    <input class="usa-input" id="ext" name="ext" type="text">
                </div>
            </div>

            <div class="sds-form-extension-btn">
                <button class="usa-button--unstyled btn btn-info" type="button">Show Extension</button>
            </div>

        </fieldset>
    </form>
</div>
  `;
  };
  
  export const AddressForm = Template.bind({});
  AddressForm.args = {
    label: "Text input label",
  };
  