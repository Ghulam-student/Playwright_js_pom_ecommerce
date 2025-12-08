exports.loginPage = class loginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = "#login2"; //id="login2"
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = '//button[text()="Log in"]';
  }

  // Method to perform login
  async login(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  // Method to get error message from alert dialog
  async getAlertMessage() {
    const dialogPromise = new Promise((resolve) => {
      this.page.once("dialog", (dialog) => {
        resolve(dialog.message());
        console.log("Alert message:", dialog.message());
        //  dialog.accept(); // Accept the dialog (click 'OK')
      });
    });
    return dialogPromise;
  }
};
