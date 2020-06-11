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
    let title = _.capitalize(vname);

    let variant = {
      name: vname,
      context: {
        button: {
          text: title,
          modifiers: vmods,
        },
        hoverButton: {
          text: title,
          modifiers: [...vmods,"hover"],
        },
        activeButton: {
          text: title,
          modifiers: [...vmods,"active"],
        },
        focusButton: {
          text: title,
          modifiers: vmods,
          classes: "usa-focus",
        },
        disabledButton: {
          text: title,
          modifiers: vmods,
          disabled: true,
        },
        button_c: {
          text: null,
          icons: true,
          modifiers: vmods,
          smodifiers: ['circle'],
        },
        hoverButton_c: {
          text: null,
          icons: true,
          modifiers: [...vmods,"hover"],
          smodifiers: ['circle'],
        },
        activeButton_c: {
          text: null,
          icons: true,
          modifiers: [...vmods,"active"],
          smodifiers: ['circle'],
        },
        focusButton_c: {
          text: null,
          modifiers: null,
          icons: true,
          classes: "usa-focus",
          smodifiers: ['circle'],
        },
        disabledButton_c: {
          text: null,
          icons: true,
          modifiers: vmods,
          smodifiers: ['circle'],
          disabled: true,
        },





        
        bigButton: {
          text: title,
          modifiers: [...vmods,"big"],
        },
        bigButton_c: {
          text: null,
          icons: true,
          modifiers: vmods,
          smodifiers: ['circle','big'],
        },
        smallButton: {
          text: title,
          modifiers: vmods,
          smodifiers: ['small'],
        },
        smallButton_c: {
          text: null,
          icons: true,
          modifiers: vmods,
          smodifiers: ['circle','small'],
        },
        shadowButton: {
          text: title,
          modifiers: vmods,
          smodifiers: ['shadow'],
        },
        shadowButton_c: {
          text: null,
          icons: true,
          modifiers: vmods,
          smodifiers: ['circle','shadow'],
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
  collated: false,
  default: "default",
  variants: variants()
};
