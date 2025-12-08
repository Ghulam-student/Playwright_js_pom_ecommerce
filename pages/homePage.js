exports.homePage = class homePage {
  constructor(page) {
    this.page = page;
    // Define locators for various navigation links
    this.homeLink = page.locator('a.nav-link[href="index.html"]');
    this.contactLink = page.locator('//a[text()="Contact"]');
    this.aboutUsLink = page.locator('//a[@data-target="#videoModal"]');
    this.cartLink = page.locator('//a[@id="cartur"]');
    this.loginLink = page.locator("#login2");
    this.signupLink = page.locator("#signin2");
    this.closeBtnNewMessage = page
      .getByLabel("New message")
      .getByLabel("Close");
    this.closeBtnAboutUs = page.locator(
      '//*[@id="videoModal"]/div/div/div[3]/button'
    );
    this.closeBtnLogin = page.locator(
      '//*[@id="logInModal"]/div/div/div[3]/button[1]'
    );

    this.closeBtnSingup = page.locator('//h5[@id="signInModalLabel"]');
  }
  async gotoHomePage() {
    await this.page.goto("https://demoblaze.com/index.html");
  }
  // Action to click the Home link
  async clickHomeLink() {
    await this.homeLink.click();
  }
  // Action to click the Contact link
  async clickContactLink() {
    await this.contactLink.click();
    await this.closeBtnNewMessage.click();
  }
  // Action to click the About Us link
  async clickAboutUsLink() {
    await this.aboutUsLink.click();
    await this.closeBtnAboutUs.click();
  }

  // Action to click the Cart link
  async clickCartLink() {
    await this.cartLink.click();
  }

  // Action to click the Login link
  async clickLoginLink() {
    await this.loginLink.click();
    await this.closeBtnLogin.click();
  }

  // Action to click the SignUp link
  async clickSignUpLink() {
    await this.signupLink.click();
    await this.closeBtnSingup.click();
  }
};
