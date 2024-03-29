export default {
    title: "Components/History",
  };
  const Template = () => {
    return `<ul class="sds-history">
    <li>
        <div class="sds-history__bullet"></div>
        <div class="sds-card shadow-none">
            <h5 class="h5" aria-role="heading" aria-level="5">Permissions Update</h5>
            <p class="sds-small">April 6, 2020 3:00pm</p>
            <p class="sds-small">Permissions asscoiated with SAM PMO Administrator definition has been updated.</p>
        </div>
    </li>
    <li>
        <div class="sds-history__bullet"></div>
        <div class="sds-card shadow-none">
            <h5 class="h5" aria-role="heading" aria-level="5">Permissions Error</h5>
            <p class="sds-small">April 6, 2020 3:00pm</p>
            <p class="sds-small">Permissions have not been updated.</p>
        </div>
    </li>
    <li>
        <div class="sds-history__bullet sds-history__bullet--selected">
        </div>
        <div class="sds-card">
            <h5 class="h5" aria-role="heading" aria-level="5">Currently Selected</h5>
            <p class="sds-small">April 6, 2020 3:00pm</p>
            <p class="sds-small">Permissions being updated.</p>
        </div>
    </li>
    <li>
        <div class="sds-history__bullet"></div>
        <div class="sds-card shadow-none">
            <h5 class="h5" aria-role="heading" aria-level="5">Permissions Update</h5>
            <p class="sds-small">April 6, 2020 3:00pm</p>
            <p class="sds-small">Permissions asscoiated with SAM PMO Administrator definition has been updated.</p>
        </div>
    </li>
</ul>
  `;
  };
  export const History = Template.bind({});
  