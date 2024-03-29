export default {
    title: "Components/Dashboard/Statistics",
  };
  const Template = () => {
    return `<h3 class="margin-0">SDS Statistic Alternative</h3>
    <div class="margin-x-2 display-flex">
        <div class="sds-statistics--alt">
            <button class="statistic-alt">
                <div class="value">18</div>
                <div class="label">Statistic Label</div>
            </button>
        </div>
        <div class="sds-statistics--alt">
            <button class="statistic-alt">
                <div class="value">45</div>
                <div class="label">Statistic Label</div>
            </button>
        </div>
    </div>
  `;
  };
  export const Alt = Template.bind({});
  