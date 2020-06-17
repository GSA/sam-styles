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
        hoverButton: {
          text: 'Hover',
          modifiers: [...vmods, "hover"],
        },
        activeButton: {
          text: 'Active',
          modifiers: [...vmods, "active"],
        },
        focusButton: {
          text: 'Focused',
          modifiers: vmods,
          classes: "usa-focus",
        },
        disabledButton: {
          text: 'Disabled',
          modifiers: vmods,
          disabled: true,
        },
        iconButton: {
          text: 'Icon left',
          modifiers: vmods,
          icon: {
              icon: 'book',
              classes: 'fa-fw'
          }
        },
        bigButton: {
          text: 'Big Button',
          modifiers: [...vmods, "big"],
        },
        smallButton: {
          text: 'Small Button',
          modifiers: vmods,
          smodifiers: ["small"],
        },
        shadowButton: {
          text: 'Shadow',
          modifiers: vmods,
          smodifiers: ["shadow"],
        },
      },
    };
    variants.push(variant);
  }
  return variants;
}

//    notes: ".usa-button--hover and .usa-button--active classes are just to show their formatting in this context but should not be used in production",

module.exports = {
  label: "Standard",
  status: "ready",
  context: {
    text: "Button",
    modifiers: "",
  },
  collated: false,
  default: "default",
  variants: variants(),
};
