describe('Card component', () => {
  before(() => {
    cy.visit('http://localhost:3000');
    cy.wait(2000); // Should probably do something better here with cy.wait()
  });

  it('Card image has a src attribute', () => {
    cy.get('.App')
      .find('.jd-card').first()
      .find('img')
      .should('have.attr', 'src');
  });
  
  it('Card image has an alt attribute', () => {
    cy.get('.App')
      .find('.jd-card').first()
      .find('img')
      .should('have.attr', 'alt');
  });

  it('Card has a time', () => {
    cy.get('.App')
      .find('.cards')  
      .find(':nth-child(1) > .content > .header')
      .should('have.class', 'jd-time');
  });

  it('Card has a username', () => {
    cy.get('.App')
      .find('.cards')  
      .find(':nth-child(1) > .content > .meta')
      .should('have.class', 'jd-username');
  });

  it('Card has a description', () => {
    cy.get('.App')
    .find('.cards')
    .find(':nth-child(1) > .content > .description')
    .should('have.class', 'jd-text');
  });
});
