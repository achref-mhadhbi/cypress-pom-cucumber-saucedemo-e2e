export default new class AddToCartPage {
  itemLocator = ".inventory_item";
  cartBadgeNumbLocator = ".shopping_cart_badge";
  cartLocator = ".shopping_cart_link";
  productNameLocator = ".inventory_item_name";
  addToCart(product) {
    cy.get(this.itemLocator)
      .contains(product)
      .parents(this.itemLocator)
      .contains("Add to cart")
      .click();
  }
  verifNumb(count) {
    cy.get(this.cartBadgeNumbLocator).should("contain", count);
  }
  visitCart() {
    cy.get(this.cartLocator).click();
  }
  verifCartItems(dataTable) {
    const products = dataTable.rawTable.flat();
    products.forEach((productName, index) => {
      cy.get(this.productNameLocator).eq(index).should("have.text", productName);
    });
  }
}
