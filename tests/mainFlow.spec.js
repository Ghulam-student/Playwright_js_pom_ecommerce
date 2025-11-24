import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"; //import LoginPage class to access all the methods
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

test("complete user flow: login → add to cart → checkout", async ({ page }) => {
  //Login page
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("testaccount2025", "testaccount2025");
  await page.waitForTimeout(3000);

  //Home page
  const home = new HomePage(page);
  await page.waitForTimeout(3000);
  await home.addProductToCart("Nexus 6");
  await home.gotoCart();

  //Cart Page
  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Nexus 6");
  await expect(status).toBe(true);
});
