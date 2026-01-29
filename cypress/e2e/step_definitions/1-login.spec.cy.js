import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("I login with {string} and {string}", (user, pass) => {
  cy.get('[data-test="username"]').type(user);
  cy.get('[data-test="password"]').type(pass);
  cy.get('[data-test="login-button"]').click();
});

// Cette étape est réutilisée par tous tes autres fichiers .feature
Given("I am logged in with valid credentials", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
});

Then("I should be redirected to the inventory page", () => {
  cy.url().should("include", "/inventory.html");
});