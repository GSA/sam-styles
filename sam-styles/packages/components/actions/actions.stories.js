export default {
    title: "Components/Actions",
  };
  const Template = () => {
    return `<div class="grid-row bg-accent-warm-lighter">
                <div class="tablet:grid-col">
                    <h4>Trigger options</h4>
                    <button class="usa-button sds-button--action">
                        <span>Actions</span>
                        <svg class="svg-inline--fa fa-ellipsis fa-w-4 fa-fw size-lg" aria-hidden="true" title="Screen reader description" aria-labelledby="svg-inline--fa-title-W811WiWkIWgO" data-prefix="sds" data-icon="ellipsis" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 512" data-fa-i2svg=""><title id="svg-inline--fa-title-W811WiWkIWgO">Screen reader description</title><path fill="currentColor" d="M60,390.763209 C93.137085,390.763209 120,417.902989 120,451.381605 C120,484.86022 93.137085,512 60,512 C26.862915,512 0,484.86022 0,451.381605 C0,417.902989 26.862915,390.763209 60,390.763209 Z M60,195.381605 C93.137085,195.381605 120,222.521385 120,256 C120,289.478615 93.137085,316.618395 60,316.618395 C26.862915,316.618395 0,289.478615 0,256 C0,222.521385 26.862915,195.381605 60,195.381605 Z M60,0 C93.137085,0 120,27.13978 120,60.6183953 C120,94.0970106 93.137085,121.236791 60,121.236791 C26.862915,121.236791 0,94.0970106 0,60.6183953 C0,27.13978 26.862915,0 60,0 Z"></path></svg>
                        <span class="sr-only"></span>
                    </button>

                    <h4>Menu</h4>
                    <div class="sds-overlay minw-menu maxw-mobile radius-overlay">
                        <div class="sds-menu">
                            <div class="sds-menu__header">
                                <span class="sds-menu__header-title">Actions</span>
                                <button class="usa-button sds-button--circle sds-button--white" aria-label="Close Menu">
                                    <i class="fas bi-x size-lg"></i>
                                </button>
                            </div>
                            <button class="sds-menu__item">
                                Download
                            </button>
                            <button class="sds-menu__item">
                                Follow
                            </button>
                            <button class="sds-menu__item">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
  `;
  };
  export const Actions = Template.bind({});
  