describe('Checkout Complete!', () => {
  it('should check if the checkout Complete! page is displayed and correct', () => {
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
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="title"]').should('be.visible').and('contain.text', 'Checkout: Complete!');
    cy.get('[data-test="complete-text"]').should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!').and('be.visible');
  
  })
})