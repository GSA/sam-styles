const JSDOMEnvironment = require('jest-environment-jsdom');
const { fractalLoad } = require("./delayed-root-suite");
const ChromeFractalTester = require("./chrome-fractal-tester");

class JSDOMEnvironmentGlobal extends JSDOMEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    await fractalLoad.then(() => {
      const chromeFractalTester = new ChromeFractalTester();
      const { handles } = chromeFractalTester;
      // Setting global
      this.global.chromeFractalTester = chromeFractalTester;
      this.global.handles = handles;
    });
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = JSDOMEnvironmentGlobal;