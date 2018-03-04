const fetchData = {
  fromApi(fetch, url) {
    return fetch(url)
      .then(response => response.json());
  },

  fromTwitter(fetch, query) {
    const twitterApiUrl = 'https://node-twitter-rest-api.herokuapp.com/search/tweets?q=';
    return this.fromApi(fetch, twitterApiUrl + query);
  },

  traffic(fetch) {
    return this.fromTwitter(fetch, '%23edintravel%20-RT');
  },
};

module.exports = fetchData;
