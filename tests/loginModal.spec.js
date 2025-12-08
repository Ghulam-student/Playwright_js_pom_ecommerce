import { loginPage } from "../pages/loginPage";
import { homePage } from "../pages/homePage";
import { test, expect } from "@playwright/test";

// Perform login with valid credentials
test("Login successfully with valid credentials", async ({ page }) => {
  const homepage = new homePage(page);
  await homepage.gotoHomePage();

  const login = new loginPage(page);
  await login.login("testaccount2025", "testaccount2025");
  // Add assertions to verify successful login
  await expect(page.locator("//a[@id='nameofuser']")).toContainText(
    "Welcome testaccount2025"
  );
});

// Test invalid login credentials
test("should show error message with invalid credentials", async ({ page }) => {
  const homepage = new homePage(page);
  await homepage.gotoHomePage();

  const login = new loginPage(page);
  await login.login("invalidUsera1", "invalidPassword1");

  await login.getAlertMessage().then((message) => {
    expect(message).toBe("User does not exist.");
  });
});
// Test with invalid password and valid username
test("should show error message for invalid password and valid username", async ({
  page,
}) => {
  const homepage = new homePage(page);
  await homepage.gotoHomePage();

  const login = new loginPage(page);
  await login.login("testaccount2025", "abcdefg");

  await login.getAlertMessage().then((message) => {
    expect(message).toBe("Wrong password.");
  });
});
