describe('Currency conversion', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should fetch and render currencies', () => {
    cy.get('[data-cy=currencyList]').should('exist');
    cy.get('[data-cy=currencyModal]').should('not.exist');
  });

  it('should open modal on currency click', () => {
    cy.get('[data-cy=currencyRatedCard]').contains('Euro').click();
    cy.get('[data-cy=currencyModal]').should('exist');
  });

  it('should convert the selected currency to other currencies when amount changed', () => {
    cy.get('[data-cy=currencyRatedCard]').contains('Euro').click();
    cy.get('[data-cy=numberInput]').should('have.value', '1');

    cy.get('[data-cy=currencyModalRate]').then(($span) => {
      const prevRate = $span.text();

      cy.get('[data-cy=numberInput]').type(`{backspace}3`);
      cy.get('[data-cy=currencyModalRate]').should('not.have.text', prevRate);
    });
  });

  it('should recalculate value if currency changed', () => {
    cy.get('[data-cy=currencyRatedCard]').contains('Euro').click();
    cy.get('[data-cy=dropDown]').click();

    cy.get('[data-cy=currencyModalRate]').then(($span) => {
      const prevRate = $span.text();

      cy.get('[data-cy=dropDownOption]').contains('Bitcoin').click();
      cy.get('[data-cy=currencyModalRate]').should('not.have.text', prevRate);
    });
  });

  it('should close modal on close button click', () => {
    cy.get('[data-cy=currencyRatedCard]').contains('Euro').click();
    cy.get('[data-cy=currencyModal]').should('exist');
    cy.get('[data-cy=modalCloseButton]').click();
    cy.get('[data-cy=currencyModal]').should('not.exist');
  });
});
