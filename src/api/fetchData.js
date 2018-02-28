const fetchData = {
  traffic: fetch => fetch('https://node-twitter-rest-api.herokuapp.com/search/tweets?q=%23edintravel')
    .then(res => res.json()),
};

module.exports = fetchData;
