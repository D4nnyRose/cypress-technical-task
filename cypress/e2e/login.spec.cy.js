describe('Page accessability', () => {

  it('should check if the page is accessable', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="login-button"]').should('exist');
    cy.get('[data-test="error"]').should('not.exist');
  })

  it('should varify valid login credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.app_logo').should('exist');
    cy.get('[data-test="inventory-list"]').should('exist');
  })

  it('should check if an error appears for invalid login credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('1234crazyuser');
    cy.get('[data-test="password"]').type('1234crazypassword');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('exist');
  })
 })