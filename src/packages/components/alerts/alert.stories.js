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
    role: {type: "string"},
    title: {type: "string"},
    text: {type: "string"},
  },
};

export const __namedExportsOrder = ['Expanded', 'Header', 'Sticky', 'Default_Deprecated', 'Block_Deprecated'];

const AlertTemplate = (args) => {
  return `<div class="usa-alert ${args.class}" role="${args.role}">
  <div class="usa-alert__body">
    
      <h4 class="usa-alert__heading">${args.title}</h4>
    <p class="usa-alert__text">
      ${args.text}
    </p>
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

export const Default_Deprecated = () => {
  return DefaultTemplate;
};

export const Block_Deprecated = () => {
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

export const Overview = () => {
  return OverviewTemplate;
};


/*export const Default = AlertTemplate.bind({});
Default.args = {
  class: "",
  role: "",
  title: "",
  text: 'Lorem ipsum dolor sit amet, <a class="usa-link" href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.',
};

export const Emergency = AlertTemplate.bind({});
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
