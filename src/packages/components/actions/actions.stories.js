export default {
    title: "Components/Actions",
  };
  const Template = () => {
    return `<div class="grid-row bg-accent-warm-lighter">
                <div class="tablet:grid-col">
                    <h4>Trigger options</h4>
                    <button class="usa-button sds-button--action">
                        <span>Actions</span>
                        <i class="sds fa-ellipsis fa-fw" aria-hidden="true" title="Screen reader description"></i>
                        <span class="sr-only">Screen reader description</span>
                    </button>

                    <h4>Menu</h4>
                    <div class="sds-overlay minw-menu maxw-mobile radius-overlay">
                        <div class="sds-menu">
                            <div class="sds-menu__header">
                                <span class="sds-menu__header-title">Actions</span>
                                <button class="usa-button sds-button--circle sds-button--white" aria-label="Close Menu">
                                    <i class="fas fa-times fa-fw"></i>
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
  export const Default = Template.bind({});
  