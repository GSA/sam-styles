export default {
    title: "Components/Dashboard/Statistics",
  };
  const Template = () => {
    return `<h3 class="margin-0">SDS Statistic</h3>
    <div class="sds-statistics">
        <button class="green statistic">
            <div class="value">
                <span class="circular">150K+</span>
            </div>
            <div class="label">Active</div>
        </button>
        <button class="blue statistic">
            <div class="value">
                <span class="circular">999K+</span>
            </div>
            <div class="label">Draft</div>
        </button>
        <button class="red statistic">
            <div class="value">
                <span class="circular">112</span>
            </div>
            <div class="label">Rejected</div>
        </button>
        <button class="orange statistic">
            <div class="value">
                <span class="circular">209</span>
            </div>
            <div class="label">Overdue</div>
        </button>
        <button class="grey statistic">
            <div class="value">
                <span class="circular">5</span>
            </div>
            <div class="label">Cancelled</div>
        </button>
        <button class="yellow statistic">
            <div class="value">
                <span class="circular">12</span>
            </div>
            <div class="label">Pending</div>
        </button>
    </div>
  `;
  };
  export const Default = Template.bind({});
  