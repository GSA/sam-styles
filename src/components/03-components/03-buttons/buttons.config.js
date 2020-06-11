const _ = require("lodash");

const variantNames = [
  "default",
  "secondary",
  "base",
  "danger",
  "outline",
  "outline-inverse",
];
function variants() {
  let variants = [];
  let len = variantNames.length;

  for (let i = 0; i < len; i++) {
    let vname = variantNames[i]
    let vmods  = vname.split("-");
    let variant = {
      name: vname,
      context: {
        button: {
          text: _.capitalize(vname),
          modifiers: vmods,
        },
        hoverButton: {
          text: _.capitalize(vname),
          modifiers: [...vmods,"hover"],
        },
        activeButton: {
          text: _.capitalize(vname),
          modifiers: [...vmods,"active"],
        },
        focusButton: {
          text: _.capitalize(vname),
          modifiers: vmods,
          classes: "usa-focus",
        },
        disabledButton: {
          text: _.capitalize(vname),
          modifiers: vmods,
          disabled: true,
        },
      },
    };
    variants.push(variant);
  }
  return variants;
}

//    notes: ".usa-button--hover and .usa-button--active classes are just to show their formatting in this context but should not be used in production",

module.exports = {
  label: "Buttons",
  status: "ready",
  context: {
    text: 'Button',
    modifiers:""
  },
  default: "default",
  variants: variants()
};
