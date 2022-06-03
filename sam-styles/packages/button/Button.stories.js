import {createButton} from "./Button";
import ButtonTemplate from "./button-variants.html";
export default {
  title: "Components/Button",
  argTypes: {
    label: {control: "text"},
    onClick: {action: "onClick"},
    type: {
      control: {type: "select"},
      options: [
        "primary",
        "secondary",
        "base",
        "unstyled",
        "accent-cool",
        "outline",
        "outline-inverse",
        "shadow",
        "white",
        "danger",
      ],
    },
    size: {
      control: {type: "select"},
      options: ["", "big", "small"],
    },
    focusType: {
      control: {type: "select"},
      options: ["", "hover", "active", "focus", "disabled"],
    },
    color: {
      control: {type: "select"},
      options: ["", "light", "lighter", "lightest", "vivid", "dark", "darker"],
    },
  },
};

const Template = ({label, ...args}) => {
  return createButton({label, ...args});
};

export const Variants = () => {
  return ButtonTemplate;
};

export const Default = Template.bind({});
Default.args = {label: "Default"};

export const AccentCool = Template.bind({});
AccentCool.args = {
  label: "Accent",
  type: "accent-cool",
};

export const Base = Template.bind({});
Base.args = {
  label: "Base",
  type: "base",
};

export const Big = Template.bind({});
Big.args = {
  label: "Big",
  size: "big",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline",
  type: "outline",
};

// export const OutlineInverse = Template.bind({});
// OutlineInverse.args = {
//   label: "Outline",
//   type: "outline-inverse",
// };

export const Secondary = Template.bind({});
Secondary.args = {label: "Secondary", type: "secondary"};

export const Unstyled = Template.bind({});
Unstyled.args = {
  label: "Unstled",
  type: "unstyled",
};
