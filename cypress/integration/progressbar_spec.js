import helpers from '../helpers';

describe('ProgressBar component', () => {
  beforeEach(function() {
    this.fetchTrafficDataDeferred = helpers.deferred();

    cy.clock();
    cy.visit('http://localhost:3000', {
      onBeforeLoad (win) {
        helpers.fakeFetch(win, this.fetchTrafficDataDeferred);
      }
    });
    
    helpers.getFakeTrafficData('traffic_first', {
      delay: 2000,
    });
  });

  it('has no animation property on load', () => {
    cy.get('.App')
      .find('.jd-progress .bar')
      .should('have.attr', 'style', 'animation: none;')
  });

  describe('when the api call is delayed', () => {
    beforeEach(function() {
      cy.tick(2000);
    });

    it('counts down the correct number of seconds', function () {
      cy.get('.App')
        .find('.jd-progress .bar')
        .should('have.attr', 'style', 'animation: countdown 58s linear infinite;')
    });
  });
});
