import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the shopping cart", () => {
  cy.get(".shopping_cart_link").click();
});

When("I click on the checkout button", () => {
  cy.get('[data-test="checkout"]').click();
});

When("I fill in the shipping information with {string}, {string} and {string}", (fname, lname, zip) => {
  cy.get('[data-test="firstName"]').type(fname);
  cy.get('[data-test="lastName"]').type(lname);
  cy.get('[data-test="postalCode"]').type(zip);
});

When("I click on the continue button", () => {
  cy.get('[data-test="continue"]').click();
});

When("I click on the finish button", () => {
  cy.get('[data-test="finish"]').click();
});

Then("I should see the success message {string}", (msg) => {
  cy.get(".complete-header").should("have.text", msg);
});