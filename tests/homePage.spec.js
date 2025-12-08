import { homePage } from "../pages/homePage";

import { test, expect } from "@playwright/test";
test("should navigate to the correct pages when clicking the links", async ({
  page,
}) => {
  const homepage = new homePage(page);
  await homepage.gotoHomePage();

  // Test Home link
  await homepage.clickHomeLink();

  expect(page).toHaveTitle("STORE");

  // Test Contact link
  await homepage.clickContactLink();
  await expect(homepage.closeBtnNewMessage).toBeVisible;

  // Test About Us link
  await homepage.clickAboutUsLink();
  await expect(homepage.closeBtnAboutUs).toBeVisible();
  await page.waitForTimeout(3000);

  // Test Cart link
  await homepage.clickCartLink();
  await expect(page).toHaveURL(/.*cart.html/);

  // Test Login link
  await homepage.clickLoginLink();
  await expect(homepage.closeBtnLogin).toBeVisible();

  // Test SignUp link
  await homepage.clickSignUpLink();
  await expect(homepage.closeBtnSingup).toBeVisible();
  await expect(homepage.closeBtnSingup).toBeEnabled();
});
