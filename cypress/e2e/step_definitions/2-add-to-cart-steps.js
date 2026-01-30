import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import AddToCartPage from "../pages/02-AddToCartPage";

When("I add {string} to the cart", (product) => {
  AddToCartPage.addToCart(product);
});

Then("the cart badge should show {int} items", (count) => {
  AddToCartPage.verifNumb(count);
});


Then("I should see these products in the cart:", (dataTable) => {
AddToCartPage.verifCartItems(dataTable);
});
