describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  
  it('has the correct classes applied', () => {
    cy.get('.App')
      .find('header')
      .should('have.class', 'jd-header')
      .should('have.class', 'ui')
      .should('have.class', 'inverted')
      .should('have.class', 'segment');
  });

});
