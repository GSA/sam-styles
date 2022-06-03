import ButtonTemplate from "./button-variants.html";
export default {
  title: "Components/Button",
  argTypes: {
    label: {control: "text"},
    type: {
      control: {type: "select"},
      options: ["primary", "secondary", "base", "unstyled", "accent-cool", "outline", "outline-inverse"],
    },
    size: {
      control: {type: "select"},
      options: ["", "big", "small"],
    },

    color: {
      control: {type: "select"},
      options: ["", "light", "lighter", "lightest", "vivid", "dark", "darker"],
    },
  },
};

const CustomTemplate = (args) => {
  var sizeD = "";
  if (args.size) {
    if (args.size === "small") {
      sizeD = "sds-button--small";
    } else {
      sizeD = `usa-button--${args.size}`;
    }
  }
  var typeD = args.type ? `usa-button--${args.type}` : "";

  const colorType = args.type ? args.type : "primary";
  const colorD = args.type && args.color ? `bg-${colorType}-${args.color}` : "";

  return `<button
    type="button"
    class="usa-button ${typeD} ${sizeD} ${colorD}"
    >${args.label}</button
>
<button
    type="button"
    class="usa-button ${typeD} ${sizeD} ${colorD} usa-button--hover"
    >Hover</button
>
<button
    type="button"
    class="usa-button ${typeD} ${sizeD} ${colorD} usa-button--active"
    >Active</button
>
<button
    type="button"
    class="usa-button ${typeD} ${sizeD} ${colorD} usa-focus"
    >Focus</button
>

<button
    type="button"
    class="usa-button ${typeD} ${sizeD} ${colorD}"
disabled="disabled"
    >Disabled</button
>
`;
};

export const Variants = () => {
  return ButtonTemplate;
};

export const Default = CustomTemplate.bind({});
Default.args = {label: "Default"};

export const Secondary = CustomTemplate.bind({});
Secondary.args = {label: "Secondary", type: "secondary"};

export const AccentCool = CustomTemplate.bind({});
AccentCool.args = {
  label: "Accent",
  type: "accent-cool",
};

export const Base = CustomTemplate.bind({});
Base.args = {
  label: "Base",
  type: "base",
};
export const Small = CustomTemplate.bind({});
Small.args = {
  label: "Small",
  size: "small",
};

export const Big = CustomTemplate.bind({});
Big.args = {
  label: "Big",
  size: "big",
};

export const Outline = CustomTemplate.bind({});
Outline.args = {
  label: "Outline",
  type: "outline",
};

// export const OutlineInverse = Template.bind({});
// OutlineInverse.args = {
//   label: "Outline",
//   type: "outline-inverse",
// };

export const Unstyled = CustomTemplate.bind({});
Unstyled.args = {
  label: "Unstled",
  type: "unstyled",
};
