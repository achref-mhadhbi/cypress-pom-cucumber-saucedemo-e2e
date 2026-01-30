import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import CheckoutPage from "../pages/03-CheckoutPage";

When("I click on the checkout button", () => {
  CheckoutPage.navToCheckout();
});

When(
  "I fill in the shipping information with {string}, {string} and {string}",
  (firstName, lastName, zipCode) => {
    CheckoutPage.fillChekoutForm(firstName, lastName, zipCode);
  },
);
When("I click on the continue button",()=>{
CheckoutPage.submitForm()
})

When("I click on the finish button",()=>{
  CheckoutPage.finishChekout()
})
Then("I should see the success message {string}", (succesMsg) => {
  CheckoutPage.verifyChekout(succesMsg);
});
