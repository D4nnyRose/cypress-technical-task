describe('User logout', () => {
  it('should check if the checkout user is logged out successfully', () => {
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
    cy.get('[data-test="back-to-products"]').click();

    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();

    cy.get('[data-test="login-button"]').should('be.visible')
  
  })
})