const _ = require("lodash");

const usavariants = [
  "primary-lighter",
  "secondary",
  "unstyled",
  "accent-warm",
  "accent-cool",
  "outline",
  "outline-inverse",
  "big",
  'base'
];
const sdsvariants =[
  "small",
  "shadow",
  "white",
];
const usaclasses = usavariants.map(i => 'usa-button--' + i);
const sdsclasses = sdsvariants.map(i => 'sds-button--' + i);
usaclasses.splice(usavariants.length-2,1,"usa-button--outline usa-button--inverse");
// const usaclasses = usavariants.map(i => 'usa-theme' + i);
const variantNames   = [...usavariants, ...sdsvariants];
const variantClasses = [...usaclasses,  ...sdsclasses];

module.exports = {
  label: "Standard",
  status: "wip",
  context: {
    text: "Button",
  },
  variants: variants(),
};

function variants() {
  let variants = [];

  for (let i = 0; i < variantNames.length; i++) {
    let name = _.capitalize(variantNames[i]);
    let button = {
      text:variantNames[i],
      classes:variantClasses[i]
    };
    let variant = {
      name: name,
      context: {
        name: name,
        button: button,
      },
    };
    variants.push(variant);
  }
  return variants;
}
