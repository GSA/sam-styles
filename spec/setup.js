const { fractalLoad } = require("./delayed-root-suite");

module.exports = async () => {
  const fractal = await fractalLoad;
  global.fractal = fractal;
};