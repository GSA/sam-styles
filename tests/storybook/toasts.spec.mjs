import { test, expect } from "@playwright/test";

// Covers toasts.scss — .sds-toast variant border-color and content background
// Story: Components/Toasts — Toasts

test.describe("Toasts regression", () => {
  test("info toast is visible and has info border-color", async ({ page }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const toast = page.locator(".sds-toast.sds-toast--info").first();
    await expect(toast).toBeVisible();
    // &.sds-toast--info .sds-toast__content { @include u-border("info") } → rgb(0, 189, 227)
    const content = toast.locator(".sds-toast__content").first();
    await expect(content).toHaveCSS("border-color", "rgb(0, 189, 227)");
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

  test("success toast is visible and has primary-dark border-color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const toast = page.locator(".sds-toast.sds-toast--success").first();
    await expect(toast).toBeVisible();
    // &.sds-toast--success .sds-toast__content { @include u-border("primary-dark") } → rgb(0, 169, 28)
    const content = toast.locator(".sds-toast__content").first();
    await expect(content).toHaveCSS("border-color", "rgb(0, 169, 28)");
  });

  test("warning toast is visible and has warning border-color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const toast = page.locator(".sds-toast.sds-toast--warning").first();
    await expect(toast).toBeVisible();
    // &.sds-toast--warning .sds-toast__content { @include u-border("warning") } → rgb(255, 190, 46)
    const content = toast.locator(".sds-toast__content").first();
    await expect(content).toHaveCSS("border-color", "rgb(255, 190, 46)");
  });

  test("error toast is visible and has error border-color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const toast = page.locator(".sds-toast.sds-toast--error").first();
    await expect(toast).toBeVisible();
    // &.sds-toast--error .sds-toast__content { @include u-border("error") } → rgb(251, 90, 71)
    const content = toast.locator(".sds-toast__content").first();
    await expect(content).toHaveCSS("border-color", "rgb(251, 90, 71)");
  });

  test("toast content renders as flex", async ({ page }) => {
    await page.goto("/iframe.html?id=components-toasts--toasts");
    const content = page.locator(".sds-toast__content").first();
    await expect(content).toBeVisible();
    // @include u-display("inline-flex") — Chromium resolves this to "flex" on block context
    await expect(content).toHaveCSS("display", "flex");
  });
});
