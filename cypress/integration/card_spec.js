import helpers from '../helpers';

describe('Card component', () => {
  let card;
  let img;

  beforeEach(function() {
    cy.clock();
    cy.visit('http://localhost:3000', {
      onBeforeLoad (win) {
        helpers.fakeFetch(win);
      }
    });

    helpers.getFakeTrafficData('traffic_first');

    card = cy.get('.App')
      .find('.cards')
      .find(':nth-child(1)');

    img = card.find('img');
  });

  it('card image has a src attribute', function() {
    img.should('have.attr', 'src');
  });
  
  it('card image has an alt attribute', function() {
    img.should('have.attr', 'alt');
  });

  it('card has a time', function() {
    card.find('.content > .header')
      .should('have.class', 'jd-time');
  });

  it('card has a username', function() {
    card.find('.content > .meta')
      .should('have.class', 'jd-username');
  });

  it('card has a description', function() {
    card.find('.content > .description')
      .should('have.class', 'jd-text');
  });
});
