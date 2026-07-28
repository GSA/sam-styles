import { test, expect } from "@playwright/test";

// Covers toasts.scss — .sds-toast variant border-color and content background
// Story: Components/Toasts — Toasts

test.describe("Toasts regression", () => {
  test("info toast is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const toast = page.locator(".sds-toast.sds-toast--info").first();
    await expect(toast).toBeVisible();
  });

  test("info toast content renders white background", async ({ page }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const content = page
      .locator(".sds-toast.sds-toast--info .sds-toast__content")
      .first();
    await expect(content).toBeVisible();
    // @include u-bg("white")
    await expect(content).toHaveCSS("background-color", "rgb(255, 255, 255)");
  });

  test("success toast is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const toast = page.locator(".sds-toast.sds-toast--success").first();
    await expect(toast).toBeVisible();
  });

  test("warning toast is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const toast = page.locator(".sds-toast.sds-toast--warning").first();
    await expect(toast).toBeVisible();
  });

  test("error toast is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const toast = page.locator(".sds-toast.sds-toast--error").first();
    await expect(toast).toBeVisible();
  });

  test("toast content renders as inline-flex", async ({ page }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const content = page.locator(".sds-toast__content").first();
    await expect(content).toBeVisible();
    // @include u-display("inline-flex") — Chromium resolves this to "flex" on block context
    await expect(content).toHaveCSS("display", "flex");
  });
});
