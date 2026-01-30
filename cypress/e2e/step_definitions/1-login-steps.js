import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/01-LoginPage";


Given("I am on the login page", () => {
  LoginPage.visit();
});

When("I login with {string} and {string}", (username,password) => {
  LoginPage.login(username,password)
});

Then("I should be redirected to the inventory page", () => {
  LoginPage.assertion()
});
