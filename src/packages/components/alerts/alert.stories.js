import BlockTemplate from "./templates/block.html";
import DefaultTemplate from "./templates/default.html";
import ExpandedTemplate from "./templates/expanded.html";
import HeaderTemplate from "./templates/header.html";
import StickyTemplate from "./templates/sticky.html";
import OverviewTemplate from "./templates/overview.html";
//import DefaultNew from "./templates/new_default.html";

export default {
  title: "Components/Alert",
  argTypes: {
    class: {type: "string"},
    //role: {type: "string"},
    //title: {type: "string"},
    text: {type: "string"},
  },
};

export const __namedExportsOrder = ['Default','Expanded', 'Header', 'Sticky', 'Default_deprecated', 'Block_deprecated'];

const AlertTemplate = (args) => {
  return `
<h3>SDS Alert Default</h3>
<div class="sds-alert info ${args.class}">
    <div class="grid-container width-full maxw-full margin-0 padding-0">
        <div class="grid-row">
            <div class="grid-col-auto">
                <i class="sds bi-info-circle size-2x"></i>
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
                <i class="sds bi-exclamation-triangle size-2x"></i>
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
                <i class="sds bi-slash-circle size-2x"></i>
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
                <i class="sds bi-check-circle size-2x"></i>
            </div>
            <div class="grid-col-fill">
                <span class="sds-alert-content">
                    <b>Less important than Global Alerts</b></br>${args.text}
                </span>
            </div>
        </div>
    </div>
</div>


`;
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
//export const Default = () => {
//  return DefaultNew;
//};


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

//export const Overview = () => {
//  return OverviewTemplate;
//};


export const Default = AlertTemplate.bind({});
Default.args = {
  class: "",
  //role: "",
  //title: "",
  text: 'Consectetur adipiscing elit, sed do eiusmod tempor indididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
};

/*export const Emergency = AlertTemplate.bind({});
Emergency.args = {
  class: "usa-alert--emergency",
  role: "alert",
  title: "Emergency status",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
};

export const Error = AlertTemplate.bind({});
Error.args = {
  class: "usa-alert--error",
  role: "alert",
  title: "Error status",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
};
export const Info = AlertTemplate.bind({});
Info.args = {
  class: "usa-alert--info",
  title: "Informative status",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
};

export const NoHeading = NoHeaderAlertTemplate.bind({});
NoHeading.args = {
  class: "usa-alert--info usa-alert--no-heading",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
};
export const NoIcon = NoHeaderAlertTemplate.bind({});
NoIcon.args = {
  class: "usa-alert--info usa-alert--no-icon",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
};
export const Slim = NoHeaderAlertTemplate.bind({});
Slim.args = {
  class: "usa-alert--info usa-alert--slim",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
};
export const Success = AlertTemplate.bind({});
Success.args = {
  class: "usa-alert--success",
  title: "Success status",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
};
export const Warning = AlertTemplate.bind({});
Warning.args = {
  class: "usa-alert--warning",
  title: "Warning status",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
}; */
