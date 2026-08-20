import path from "node:path";
import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Vite plugin: import bare `*.html` component templates as raw string modules.
 *
 * Under the previous webpack builder, `import Tpl from "./foo.html"` resolved
 * to the file's text via the html-webpack5 default rules. Vite instead treats
 * `.html` as an entry document (and parses inline `<style>` blocks), so we
 * rewrite template imports to Vite's `?raw` query to get the file contents as
 * a default-exported string. This preserves the existing `return Template;`
 * story pattern without touching the story files that rely on it.
 */
function rawHtmlPlugin() {
  const templatesRoot = path.resolve(__dirname, "../sam-styles/packages");

  return {
    name: "sam-styles-raw-html",
    enforce: "pre",
    // Rewrite bare `import Tpl from "./foo.html"` to `"./foo.html?raw"` so Vite
    // imports the file as a raw string module. This preserves the existing
    // `return Template;` story pattern (29 story files) without editing them,
    // and keeps Vite's HTML/asset pipeline from trying to parse inline
    // `<style>` blocks in the templates. Storybook's own iframe.html and any
    // `.html` outside the component sources fall through untouched.
    async resolveId(source, importer) {
      if (!importer || !source.endsWith(".html")) return null;
      const resolved = await this.resolve(source, importer, {
        skipSelf: true,
      });
      if (!resolved) return null;
      const [filepath] = resolved.id.split("?");
      if (!path.resolve(filepath).startsWith(templatesRoot + path.sep))
        return null;
      return { id: `${filepath}?raw`, external: false };
    },
  };
}

const config = {
  stories: ["../sam-styles/packages/**/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: ["@storybook/addon-links", "@whitespace/storybook-addon-html"],

  staticDirs: ["../sam-styles/packages/images"],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  viteFinal: async (viteConfig) =>
    mergeConfig(viteConfig, {
      plugins: [rawHtmlPlugin()],
      css: {
        preprocessorOptions: {
          scss: {
            loadPaths: [
              ".",
              "./sam-styles/packages",
              "./node_modules/@uswds/uswds/packages",
              "./node_modules/@uswds",
            ],
          },
        },
        postcss: {
          plugins: [
            postcssImport({ root: path.resolve(__dirname, "..") }),
            postcssPresetEnv(),
          ],
        },
      },
    }),
};

export default config;
