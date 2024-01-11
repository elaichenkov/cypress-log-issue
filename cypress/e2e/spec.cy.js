it('passes', () => {
  cy.task('log');
  cy.visit('https://example.cypress.io');
});
