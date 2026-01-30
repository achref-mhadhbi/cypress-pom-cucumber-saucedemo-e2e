export default new (class LogoutPage {
  burgerMenuLocator = "#react-burger-menu-btn";

  logoutLinkLocator = "#logout_sidebar_link";
  loginBtnLocator = '[data-test="login-button"]';
  openSideBar() {
    cy.get(this.burgerMenuLocator).click();
  }
  logout() {
    cy.get(this.logoutLinkLocator).should('be.visible').click();
  }
  verifLogout() {
    cy.url().should("eq", "https://www.saucedemo.com/");
    cy.get(this.loginBtnLocator).should("be.visible");
  }
})();
