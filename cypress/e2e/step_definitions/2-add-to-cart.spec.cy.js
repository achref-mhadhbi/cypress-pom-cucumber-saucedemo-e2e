import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I add {string} to the cart", (product) => {
  cy.get(".inventory_item")
    .contains(product)
    .parents(".inventory_item")
    .contains("Add to cart")
    .click();
});

Then("the cart badge should show {int} items", (count) => {
  cy.get(".shopping_cart_badge").should("have.text", count.toString());
});

Then("I should see these products in the cart:", (dataTable) => {
  cy.get(".shopping_cart_link").click(); // On s'assure d'être dans le panier
  const products = dataTable.rawTable.flat();
  products.forEach((productName,index) => {
    cy.get(".inventory_item_name").eq(index).should("contain", productName);
  });
});