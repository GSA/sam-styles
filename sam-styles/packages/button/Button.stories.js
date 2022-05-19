import { createButton } from "./Button";
import ButtonTemplate from "./button-variants.html";
export default {
  title: "Components/Button",
  argTypes: {
    label: { control: "text" },
    onClick: { action: "onClick" },
    type: {
      control: { type: "select" },
      options: ["", "secondary", "base", "unstyled", "accent-cool", "outline", "shadow", "white", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["", "big", "small"],
    },
    focusType: {
      control: { type: "select" },
      options: ["", "hover", "active", "focus", "disabled"],
    },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});

Default.args = {
  label: "Button",
};

export const Variants = () => {
  return ButtonTemplate;
};
