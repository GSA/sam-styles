export default {
    title: "Components/ButtonRow",
  };
  const Template = () => {
    return `<h2>Button Row</h2>
    <div class="sds-button-row">
        <button class="usa-button bg-primary-lighter">Back</button>
        <button class="usa-button bg-primary-lighter">Cancel</button>
        <button class="usa-button bg-primary-lighter">Help</button>
        <button class="usa-button bg-primary-lighter">Forward</button>
    </div>
    
    <p>Or use circular buttons and labels</p>
    
    <div class="sds-button-row">
        <div class="sds-button-col sds-button-col--left">
    
            <button class="usa-button sds-button--circle bg-primary-lighter">
                <i class="fa text-ink bi-caret-left-fill" aria-hidden="true" title="Screen reader description"></i>
                <span class="sr-only"></span>
    
            </button>
            <label for="back">Go to How many CFDA Number Can My Agency Have?</label>
        </div>
        <div class="sds-button-col">
    
            <button class="usa-button sds-button--circle bg-primary-lighter">
                <i class="fa text-ink bi-x size-lg" aria-hidden="true" title="Screen reader description"></i>
                <span class="sr-only"></span>
    
            </button>
            <label for="cancel">Cancel</label>
        </div>
        <div class="sds-button-col">
    
            <button class="usa-button sds-button--circle bg-primary-lighter">
                <i class="fa text-ink bi-caret-down-fill" aria-hidden="true" title="Screen reader description"></i>
                <span class="sr-only"></span>
    
            </button>
            <label for="help">Help</label>
        </div>
        <div id="forward" class="sds-button-col sds-button-col--right">
    
            <button class="usa-button sds-button--circle bg-primary-lighter">
                <i class="fa text-ink bi-caret-right-fill" aria-hidden="true" title="Screen reader description"></i>
                <span class="sr-only"></span>
    
            </button>
            <label for="forward">Go to What is an Assistance Listing?</label>
        </div>
    </div>
  `;
  };
  export const Default = Template.bind({});
  