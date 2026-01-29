import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the burger menu", () => {
  cy.get("#react-burger-menu-btn").click();
});

When("I click on the logout link", () => {
  // Parfois le menu prend un petit temps pour s'ouvrir visuellement
  cy.get("#logout_sidebar_link").click();
});

Then("I should be redirected to the login page", () => {
  cy.get('[data-test="login-button"]').should("be.visible");
  cy.url().should("eq", "https://www.saucedemo.com/");
});
