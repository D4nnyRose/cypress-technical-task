describe('Sort button', () => {
  it('should check if the sort button is visible and is working', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.title').should('contain', 'Products')

    cy.get('[data-test="product-sort-container"]').should('exist');
    cy.get('[data-test="product-sort-container"]').select('lohi');
    
  })
  it('should sort products from lowest to highest value', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.title').should('contain', 'Products')

    cy.get('[data-test="product-sort-container"]').select('lohi');

    cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie');
    cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light');
    cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt');
  
  })
})