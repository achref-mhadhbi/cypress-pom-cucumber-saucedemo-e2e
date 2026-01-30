export default new class LoginPage {
  usernameLocator = '[data-test="username"]';
  passwordLocator = '[data-test="password"]';
  loginBtnLocator = '[data-test="login-button"]';

  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  login(username, password) {
    cy.get(this.usernameLocator).type(username);
    cy.get(this.passwordLocator).type(password);
    cy.get(this.loginBtnLocator).click();
  }

  assertion(){
  cy.url().should("include", "/inventory.html");
  }
}

