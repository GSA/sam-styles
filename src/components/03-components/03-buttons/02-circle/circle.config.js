const _ = require("lodash");

const variantNames = [
  "default",
  "secondary",
  "base",
  "danger",
  "outline",
  "outline-inverse",
  "accent",
  "white"
];
function variants() {
  let variants = [];
  let len = variantNames.length;

  for (let i = 0; i < len; i++) {
    let vname = variantNames[i];
    let vmods = vname.split("-");
    let title = _.capitalize(vname);

    let variant = {
      name: vname,
      context: {
        name: title,
        button: {
          text: title,
          modifiers: vmods,
        },

        button: {
          text: null,
          icon: true,
          modifiers: vmods,
          smodifiers: ["circle"],
        },
        hoverButton: {
          text: null,
          icon: true,
          modifiers: [...vmods, "hover"],
          smodifiers: ["circle"],
        },
        activeButton: {
          text: null,
          icon: true,
          modifiers: [...vmods, "active"],
          smodifiers: ["circle"],
        },
        focusButton: {
          text: null,
          modifiers: null,
          icon: true,
          classes: "usa-focus",
          modifiers: vmods,
          smodifiers: ["circle"],
        },
        disabledButton: {
          text: null,
          icon: true,
          modifiers: vmods,
          smodifiers: ["circle"],
          disabled: true,
        },
        bigButton: {
          text: null,
          icon:  true,
          modifiers: vmods,
          smodifiers: ["circle", "big"],
        },
        smallButton: {
          text: null,
          icon: true,
          modifiers: vmods,
          smodifiers: ["circle", "small"],
        },
        shadowButton: {
          text: null,
          icon: true,
          modifiers: vmods,
          smodifiers: ["circle", "shadow"],
        },
      },
    };
    variants.push(variant);
  }
  return variants;
}

//    notes: ".usa-button--hover and .usa-button--active classes are just to show their formatting in this context but should not be used in production",

module.exports = {
  label: "Circle",
  status: "ready",
  context: {
    text: "Button",
    modifiers: "",
  },
  collated: false,
  default: "default",
  variants: variants(),
};
