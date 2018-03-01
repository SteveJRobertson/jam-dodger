describe('CardList component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has the correct number of cards in the list', () => {
    cy.get('.App')
      .find('.cards')
      .find('.card')
      .should('have.length', 15);
  });
});
