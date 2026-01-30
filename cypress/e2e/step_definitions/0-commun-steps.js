// cypress/e2e/step_definitions/commonSteps.js
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/01-LoginPage";
import AddToCartPage from "../pages/02-AddToCartPage";



Given("I am logged in with valid credentials", () => {
  loginPage.visit();
  loginPage.login("standard_user", "secret_sauce");
});


When("I navigate to the shopping cart",()=>{
    AddToCartPage.visitCart();

})