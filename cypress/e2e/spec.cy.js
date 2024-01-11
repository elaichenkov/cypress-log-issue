describe('template spec', () => {
  it('passes', () => {
    cy.task('log', 'This will be output to the terminal');
    cy.visit('https://example.cypress.io')
  })
})