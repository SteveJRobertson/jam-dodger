module.exports = {
  deferred: function() {
    const deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  },
  fakeFetch: function(win) {
    this.fetchTrafficDataDeferred = this.deferred();
    cy.stub(win, 'fetch')
      .withArgs('https://node-twitter-rest-api.herokuapp.com/search/tweets?q=%23edintravel%20-RT&result_type=recent&tweet_mode=extended')
      .as('fetchTrafficData')
      .returns(this.fetchTrafficDataDeferred.promise);
  },
  getFakeTrafficData: function(fixture, testParams) {
    let params = testParams || {
      call: 0,
      delay: 0,
      mock: null,
    };
    let call = params.call || 0;
    let delay = params.delay || 0;
    let mock = params.mock || null;

    cy.fixture(fixture).then((trafficData) => {
      if( delay) {
        setTimeout(() => {
          this.processTrafficData(trafficData, mock, call);
        }, delay);
      } else {
        this.processTrafficData(trafficData, mock, call);
      }
    });
  },
  processTrafficData: function(trafficData, mock, call) {
    if (mock && call) {
      mock.onCall(call).resolves({
        json() {
          return trafficData;
        },
        ok: true,
      });
    } else {
      this.fetchTrafficDataDeferred.resolve({
        json() {
          return trafficData;
        },
        ok: true,
      });
    }
  }
};
