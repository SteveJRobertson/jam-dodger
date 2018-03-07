const fetchData = {
  fromApi(fetch, url) {
    return fetch(url)
      .then(response => response.json());
  },

  fromTwitter(fetch, query) {
    const twitterApiCall = `https://node-twitter-rest-api.herokuapp.com/search/tweets?q=${query}`;
    return this.fromApi(fetch, twitterApiCall);
  },

  traffic(fetch, lastId) {
    let queryString = '%23edintravel%20-RT&result_type=recent';

    if (lastId) {
      queryString += `&since_id=${lastId + 1}`;
    }

    return this.fromTwitter(fetch, queryString);
  },
};

module.exports = fetchData;
