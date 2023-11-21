import { colorThemeKey, colorThemes } from '@/constants/colorTheme/colorTheme';

describe('Theme', () => {
  it('should change "color-theme" attribute', () => {
    cy.visit('/');
    cy.get('html').should('have.attr', colorThemeKey, colorThemes.dark);
    cy.get('[data-cy=switch]').click();
    cy.get('html').should('have.attr', colorThemeKey, colorThemes.light);
  });
});
