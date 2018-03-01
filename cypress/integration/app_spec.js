describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Checks the title is correct', () => {
    cy.title().should('include', 'JamDodger');
  });
});
