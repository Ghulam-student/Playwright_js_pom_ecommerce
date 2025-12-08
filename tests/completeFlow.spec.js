import { homePage } from "../pages/homePage";
import { loginPage } from "../pages/loginPage";
import { productPage } from "../pages/productPage";
import { cartPage } from "../pages/cartPage";
import { test, expect } from "@playwright/test";

test("complete user flow: login → add to cart → checkout", async ({ page }) => {
  //Home Page
  const home = new homePage(page);
  await home.gotoHomePage();

  //Login page
  const login = new loginPage(page);
  await login.login("testaccount2025", "testaccount2025");
  //await page.waitForTimeout(3000);

  //Product page
  const product = new productPage(page);
  await page.waitForTimeout(3000);
  await product.addProductToCart("Nexus 6");
  await product.gotoCart();

  //Cart Page
  const cart = new cartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Nexus 6");
  await expect(status).toBe(true);

  //Cart Page/Place Order
  await page.waitForTimeout(3000);
  await cart.placeOrder(
    "Testing",
    "Country Name",
    "City Name",
    "00001111",
    "January",
    "2040"
  );
  await expect(cart.puchaseSuccessful).toContain(
    "Thank you for your purchase!"
  );
});
