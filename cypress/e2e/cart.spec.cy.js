describe('adds items to the cart', () => {
  it('should add multiple items to the cart', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    const items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
    cy.addItemToCart(items);
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', items.length.toString());
  })
})