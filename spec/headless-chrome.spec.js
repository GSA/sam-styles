const VisualRegressionTester = require('./visual-regression-tester');
const axeTester = require('./axe-tester');

class Device {
  constructor(name, metrics) {
    this.name = name;
    this.metrics = Object.assign({
      deviceScaleFactor: 1,
      mobile: false,
      fitWindow: false,
    }, metrics);
  }

  get description() {
    const m = this.metrics;
    const parts = [`${m.width}x${m.height}`];

    if (m.deviceScaleFactor !== 1) parts.push(`@ ${m.deviceScaleFactor}x`);
    if (m.mobile) parts.push('mobile');

    return `${this.name} (${parts.join(' ')})`;
  }
}

const SKIP_COMPONENTS = [
  // Any components that need to be temporarily skipped can be put
  // here.
  'sam',
  'page-with-sidebar',
  'state-color', // Is not a component - will be moved to docs section
  'theme-color', // Is not a component - will be moved to docs section
];
const DEVICES = [
  new Device('small-desktop', {
    width: 412,
    height: 732,
  }),
  new Device('large-desktop', {
    width: 1280,
    height: 732,
  }),
];

describe("fractal components", () => {
  // setup ChromeFractalTester
  beforeAll(() => {
    return global.chromeFractalTester.setup();
  });
  // teardown ChromeFractalTester
  afterAll(() => {
    return global.chromeFractalTester.teardown();
  });

  if (process.env.ENABLE_SCREENSHOTS) {
    if (process.env.UPDATE_GOLDEN_SCREENSHOTS) {
      VisualRegressionTester.cleanSync(global.handles, DEVICES);
    }
    // create visual regression testing metadata
    afterAll(() => VisualRegressionTester.writeMetadata(global.handles, DEVICES));
  }

  global.handles.forEach(handle => {
    let cdp;

    if (SKIP_COMPONENTS.includes(handle)) {
      test(`skipping "${handle}" TODO: fix this test!`, () => { });
    } else {
      describe(`"${handle}"`, () => {
        // init chrome devtools protocol
        beforeAll(() => {
          return chromeFractalTester
            .createChromeDevtoolsProtocol()
            .then(client => {
              cdp = client;
            });
        });

        //load fractal component in chrome
        beforeAll(() => {
          return global.chromeFractalTester.loadFractalPreview(cdp, handle);
        });

        // inject aXe
        beforeAll(() => axeTester.load(cdp));

        // shutdown chrome devtools protocol
        afterAll(() => cdp.close());

        DEVICES.forEach(device => {
          describe(`on ${device.description}`, () => {
            // set device metrics
            beforeAll(() => {
              return cdp.Emulation.setDeviceMetricsOverride(device.metrics);
            });

            test('has no aXe violations', () => {
              return axeTester.run(cdp)
            });

            if (process.env.ENABLE_SCREENSHOTS) {
              const vrt = new VisualRegressionTester({ handle, device });
              if (vrt.doesGoldenFileExist()) {
                test('matches golden screenshot', () => {
                  return vrt.screenshot(cdp).then(vrt.ensureMatchesGoldenFile)
                });
              } else {
                test('is the new golden screenshot', () => {
                  return vrt.screenshot(cdp).then(vrt.saveToGoldenFile)
                });
              }
            }
          });
        });

      });
    }
  });
});
