describe('Routing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should go to timeline page', () => {
    cy.get('li').contains('Timeline').click();
    cy.url().should('include', '/timeline');
  });

  it('should go to bank card page', () => {
    cy.get('li').contains('Bank card').click();
    cy.url().should('include', '/bank-card');
  });

  it('should go to contacts page', () => {
    cy.get('li').contains('Contacts').click();
    cy.url().should('include', '/contacts');
  });

  it('should go to home page', () => {
    cy.get('li').contains('Home').click();
    cy.url().should('include', '/');
  });
});
