describe('Header component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has the correct header title applied', () => {
    cy.get('.App')
      .find('header.jd-header.ui.inverted.segment')
      .find('span.ui.white.inverted.huge.header')
      .should('have.text', 'JamDodger');
  });
});
