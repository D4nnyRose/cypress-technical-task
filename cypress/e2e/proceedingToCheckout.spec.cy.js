describe('Procceeding to checkout', () => {
  it('should check the correct amount of items added to the cart', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    const items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
    cy.addItemToCart(items);
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', items.length.toString());

    cy.get('[data-test="shopping-cart-link"]').click();

    items.forEach((item) => {
      cy.get('[data-test="cart-list"]').contains(item).should('be.visible');
    })

    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Random');
    cy.get('[data-test="lastName"]').type('User')
    cy.get('[data-test="postalCode"]').type('1234')

    cy.get('[data-test="continue"]').click();

    items.forEach((item) => {
      cy.get('[data-test="cart-list"]').contains(item).should('be.visible');
    })
  })
})