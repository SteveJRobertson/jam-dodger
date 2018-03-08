import jdConfig from '../jamdodger.config';

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
    let queryString = jdConfig.twitterSearchParams;

    if (lastId) {
      queryString += `&since_id=${lastId}`;
    }

    return this.fromTwitter(fetch, queryString);
  },
};

export default fetchData;
