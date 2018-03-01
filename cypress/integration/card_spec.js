describe('Card component', () => {
  let card;
  let img;

  before(() => {
    cy.visit('http://localhost:3000');
    cy.wait(2000); // Should probably do something better here with cy.wait()

    card = cy.get('.App')
      .find('.cards')  
      .find(':nth-child(1)');

    img = card.find('img');
  });

  it('Card image has a src attribute', () => {
    img.should('have.attr', 'src');
  });
  
  it('Card image has an alt attribute', () => {
    img.should('have.attr', 'alt');
  });

  it('Card has a time', () => {
    card.find('.content > .header')
      .should('have.class', 'jd-time');
  });

  it('Card has a username', () => {
    card.find('.content > .meta')
      .should('have.class', 'jd-username');
  });

  it('Card has a description', () => {
    cy.get('.App')
    .find('.cards')
    .find(':nth-child(1) > .content > .description')
    .should('have.class', 'jd-text');
  });
});
