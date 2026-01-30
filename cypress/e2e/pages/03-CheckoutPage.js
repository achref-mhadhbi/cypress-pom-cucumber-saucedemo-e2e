export default new (class CheckoutPage {
  checkoutBtnLocator = '[data-test="checkout"]';
  fisrNameLocator = '[data-test="firstName"]';
  lastNameLocator = '[data-test="lastName"]';
  zipCodeLocator = '[data-test="postalCode"]';
  continueBtnLocator = '[data-test="continue"]';
  finishBtnLocator = '[data-test="finish"]';
  successMsgLocator = ".complete-header";

  navToCheckout() {
    cy.get(this.checkoutBtnLocator).click();
  }
  fillChekoutForm(firstName, lastName, zipCode) {
    cy.get(this.fisrNameLocator).type(firstName);
    cy.get(this.lastNameLocator).type(lastName);
    cy.get(this.zipCodeLocator).type(zipCode);
  }
  submitForm() {
    cy.get(this.continueBtnLocator).click();
  }
  finishChekout() {
    cy.get(this.finishBtnLocator).click();
  }
  verifyChekout(succesMsg) {
    cy.get(this.successMsgLocator).should("have.text", succesMsg);
  }
})();
