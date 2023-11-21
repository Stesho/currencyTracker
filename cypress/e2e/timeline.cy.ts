describe('Timeline', () => {
  beforeEach(() => {
    cy.visit('/timeline');
  });

  it('should render random chart', () => {
    cy.get('[data-cy=timeline]').should('exist');
  });

  it('should open form if currency changed', () => {
    cy.get('[data-cy=chartFormModal]').should('not.exist');
    cy.get('[data-cy=dropDown]').click();
    cy.get('[data-cy=dropDownOption]').contains('Bitcoin').click();
    cy.get('[data-cy=chartFormModal]').should('exist');
  });

  it('should change table rows count if days count changed', () => {
    cy.get('[data-cy=dropDown]').click();
    cy.get('[data-cy=dropDownOption]').contains('Bitcoin').click();

    cy.get('[data-cy=chartFormModal]').within(() => {
      cy.get('input').first().type(`{backspace}{backspace}5`);
    });

    cy.get('[data-cy=chartFormModal]').within(() => {
      cy.get('input').should('have.length', 21);
    });
  });

  it('should close form if "build chart" button clicked', () => {
    cy.get('[data-cy=dropDown]').click();
    cy.get('[data-cy=dropDownOption]').contains('Bitcoin').click();

    cy.get('[data-cy=chartFormModal]').should('exist');
    cy.get('button').contains('Build chart').click();
    cy.get('[data-cy=chartFormModal]').should('not.exist');
  });

  it('should show notification if "build chart" button clicked', () => {
    cy.get('[data-cy=dropDown]').click();
    cy.get('[data-cy=dropDownOption]').contains('Bitcoin').click();

    cy.get('[data-cy=notification]').should('not.exist');
    cy.get('button').contains('Build chart').click();
    cy.get('[data-cy=notification]').should('exist');
  });

  it('should open form if "back to data" button clicked', () => {
    cy.get('[data-cy=chartFormModal]').should('not.exist');
    cy.get('button').contains('Back to data').click();
    cy.get('[data-cy=chartFormModal]').should('exist');
  });
});
