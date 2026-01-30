import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LogoutPage from '../pages/04-LogoutPage'
When("I click on the burger menu", () => {
  LogoutPage.openSideBar()
});

When("I click on the logout link", () => {
  LogoutPage.logout()
});

Then("I should be redirected to the login page", () => {
 LogoutPage.verifLogout()
});
