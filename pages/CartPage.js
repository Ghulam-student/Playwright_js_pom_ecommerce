exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.noOfProducts = '//*[@id="tbodyid"]/tr[1]/td[2]'; //located all the elements in cart
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
};
