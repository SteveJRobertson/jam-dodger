import MockDate from 'MockDate';
import helpers from '../helpers';

describe('CardList component', function() {
  beforeEach(function() {
    this.fetchTrafficDataDeferred = helpers.deferred();

    cy.clock();
    cy.visit('http://localhost:3000', {
      onBeforeLoad (win) {
        helpers.fakeFetch(win, this.fetchTrafficDataDeferred);
      }
    });
  });

  describe('when traffic data is returned', function() {
    beforeEach(function() {
      helpers.getFakeTrafficData('traffic_first');
    });

    it('has the correct number of cards in the list', function() {
      cy.get('.App')
        .find('.cards')
        .find('.card')
        .should('have.length', 2);
    });

    describe('polling every 60 seconds', function() {
      beforeEach(function() {
        helpers.getFakeTrafficData('traffic_second', {
          mock: this.fetchTrafficData,
          call: 1,
        });
        // cy.fixture('traffic_second').then((trafficData) => {
        //   this.fetchTrafficData.onCall(1).resolves({
        //     json() {
        //       return trafficData;
        //     },
        //     ok: true,
        //   });
        // });
        cy.tick(60000);
      });

      it('has the correct number of cards in the list', function() {
        cy.get('.App')
          .find('.cards')
          .find('.card')
          .should('have.length', 5);
      });
    });
  });
});
