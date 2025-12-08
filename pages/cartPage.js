exports.cartPage = class cartPage {
  constructor(page) {
    this.page = page;
    this.noOfProducts = '//*[@id="tbodyid"]/tr[1]/td[2]'; //located all the elements in cart
    this.placeOrderBtn = "//button[@class='btn btn-success']"; //located Place Order button
    this.nameInput = "#name";
    this.countryInput = "#country";
    this.cityInput = "#city";
    this.creditCardInput = "#card";
    this.monthInput = "#month";
    this.yearInput = "#year";
    this.purchaseBtn = "//button[text()='Purchase']";
    this.puchaseSuccessful =
      "//h2[contains(text(), 'Thank you for your purchase!')]";
  }

  async checkProductInCart(productName) {
    const productInCart = await this.page.$$(this.noOfProducts);
    for (const product of productInCart) {
      console.log(await product.textContent());

      if (productName === (await product.textContent())) {
        return true;
        break;
      }
    }
  }
  //Cart page/Place Order
  async placeOrder(name, country, city, creditCard, month, year) {
    await this.page.locator(this.placeOrderBtn).click();
    await this.page.locator(this.nameInput).fill(name);
    await this.page.locator(this.countryInput).fill(country);
    await this.page.locator(this.cityInput).fill(city);
    await this.page.locator(this.creditCardInput).fill(creditCard);
    await this.page.locator(this.monthInput).fill(month);
    await this.page.locator(this.yearInput).fill(year);
    await this.page.locator(this.purchaseBtn).click();
  }
};
