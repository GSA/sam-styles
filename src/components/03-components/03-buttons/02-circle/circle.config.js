const _ = require("lodash");

const usavariants = [
  "secondary",
  "base",
  "accent-cool",
  "outline",
  "outline-inverse",
  "big",
];
const sdsvariants =[
  "small",
  "shadow",
  "white",
  "danger",
];
const usaclasses = usavariants.map(i => 'usa-button--' + i);
const sdsclasses = sdsvariants.map(i => 'sds-button--' + i);
usaclasses.splice(usavariants.length-2,1,"usa-button--outline usa-button--inverse");
const variantNames   = [...usavariants, ...sdsvariants];
const variantClasses = [...usaclasses,  ...sdsclasses];

module.exports = {
  label: "Circle",
  status: "wip",
  context: {
    text: null,
    icon: true,
  },
  variants: variants(),
};

function variants() {
  let variants = [];

  for (let i = 0; i < variantNames.length; i++) {
    let name = _.capitalize(variantNames[i]);
    let button = {
      text: null,
      icon: true,
      classes:variantClasses[i]
    };
    let variant = {
      name: name,
      context: {
        name: name,
        button: button
      },
    };
    variants.push(variant);
  }
  return variants;
}


