import BlockTemplate from "./templates/block.html";
import DefaultTemplate from "./templates/default.html";
import ExpandedTemplate from "./templates/expanded.html";
import HeaderTemplate from "./templates/header.html";
import StickyTemplate from "./templates/sticky.html";
import OverviewTemplate from "./templates/overview.html";

export default {
  title: "Components/Alert",
  argTypes: {
    class: {type: "string"},
    text: {type: "string"},
  },
};

const AlertTemplate = (args) => {
  return `
<h3>SDS Alert Default</h3>
<div class="sds-alert info ${args.class}">
    <div class="grid-container width-full maxw-full margin-0 padding-0">
        <div class="grid-row">
            <div class="grid-col-auto">
                <i class="sds text-info bi-info-circle size-2x"></i>
            </div>
            <div class="grid-col-fill">
                <span class="sds-alert-content">
                    <b>Less important than Global Alerts</b></br>${args.text}
                </span>
            </div>
        </div>
    </div>
</div>

<div class="sds-alert ${args.class}">
    <div class="grid-container width-full maxw-full margin-0 padding-0">
        <div class="grid-row">
            <div class="grid-col-auto">
                <i class="sds text-warning bi-exclamation-triangle size-2x"></i>
            </div>
            <div class="grid-col-fill">
                <span class="sds-alert-content">
                    <b>Less important than Global Alerts</b></br>${args.text}
                </span>
            </div>
        </div>
    </div>
</div>

<div class="sds-alert error ${args.class}">
    <div class="grid-container width-full maxw-full margin-0 padding-0">
        <div class="grid-row">
            <div class="grid-col-auto">
                <i class="sds text-error bi-slash-circle size-2x"></i>
            </div>
            <div class="grid-col-fill">
                <span class="sds-alert-content">
                    <b>Error Alerts Lorem Ipsum</b></br>${args.text}
                </span>
            </div>
        </div>
    </div>
</div>

<div class="sds-alert success ${args.class}">
    <div class="grid-container width-full maxw-full margin-0 padding-0">
        <div class="grid-row">
            <div class="grid-col-auto">
                <i class="sds text-success bi-check-circle size-2x"></i>
            </div>
            <div class="grid-col-fill">
                <span class="sds-alert-content">
                    <b>Less important than Global Alerts</b></br>${args.text}
                </span>
            </div>
        </div>
    </div>
</div>`;
};

const NoHeaderAlertTemplate = (args) => {
  return `<div class="usa-alert ${args.class}" role="${args.role}">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      ${args.text}
    </p>
  </div>
</div>
`;
};

export const Default_deprecated = () => {
  return DefaultTemplate;
};

export const Block_deprecated = () => {
  return BlockTemplate;
};

export const Expanded = () => {
  return ExpandedTemplate;
};

export const Header = () => {
  return HeaderTemplate;
};

export const Sticky = () => {
  return StickyTemplate;
};

export const Default = AlertTemplate.bind({});
Default.args = {
  class: "",
  //role: "",
  //title: "",
  text: 'Consectetur adipiscing elit, sed do eiusmod tempor indididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
};

