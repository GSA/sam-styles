export default {
    title: "Components/Toasts",
  };
  const Template = () => {
    return `<h3>SDS Toasts</h3>

    <div class="sds-toast sds-toast--info">
        <div class="sds-toast__content">
            <div class="sds-toast__content__icon">
                <i class="sds text-ink bi-info-circle size-2x"></i>
            </div>
            <span class="sds-toast__content__text">Information Saved</span>
            <div class="sds-toast__content__close">
                <i class="fas text-ink fa-times fa-fw"></i>
            </div>
        </div>
    </div>
    
    <div class="sds-toast sds-toast--success">
        <div class="sds-toast__content">
            <div class="sds-toast__content__icon">
                <i class="text-ink bi bi-check2-circle size-2x"></i>
            </div>
            <span class="sds-toast__content__text">Your information will be saved before leaving editor view</span>
            <div class="sds-toast__content__close">
                <i class="fas text-ink fa-times fa-fw"></i>
            </div>
        </div>
    </div>
    
    <div class="sds-toast sds-toast--warning">
        <div class="sds-toast__content">
            <div class="sds-toast__content__icon">
                <i class="sds text-ink bi-exclamation-triangle size-2x"></i>
            </div>
            <span class="sds-toast__content__text">Check items for accuracy</span>
            <div class="sds-toast__content__close">
                <i class="fas text-ink fa-times fa-fw"></i>
            </div>
        </div>
    </div>
    
    <div class="sds-toast sds-toast--error">
        <div class="sds-toast__content">
            <div class="sds-toast__content__icon">
                <i class="sds text-ink bi-slash-circle size-2x"></i>
            </div>
            <span class="sds-toast__content__text">Something went wrong</span>
            <div class="sds-toast__content__close">
                <i class="fas text-ink fa-times fa-fw"></i>
            </div>
        </div>
    </div>
  `;
  };
  export const Toasts = Template.bind({});
  