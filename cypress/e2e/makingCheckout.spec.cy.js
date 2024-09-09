describe('Making the checkout', () => {
  it('should check fill the required information', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    const items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
    cy.addItemToCart(items);
    
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Random');
    cy.get('[data-test="lastName"]').type('User')
    cy.get('[data-test="postalCode"]').type('1234')

    cy.get('[data-test="continue"]').click();

    items.forEach((item) => {
      cy.get('[data-test="cart-list"]').contains(item).should('be.visible');
    })

    cy.get('[data-test="total-label"]').should('have.text', 'Total: $43.18').and('is.visible');
    
  })
})