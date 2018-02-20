import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  componentDidMount() {
    fetch(
      'https://node-twitter-rest-api.herokuapp.com/search/tweets?q=%23edintravel'
    )
      .then(res => {
        console.log(res);
        res.json();
      })
      .then(result => {
        this.setState({
          posts: result.statuses
        });
      });
  }

  render() {
    const post = {
      avatarUrl: 'https://www.placecage.com/35/35',
      username: 'NicholasCage',
      time: '5 mins ago',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu varius leo, nec feugiat felis. Etiam non iaculis urna, eget tincidunt sed.`
    };

    return (
      <div className="ui container">
        <div className="column">
          <div className="ui cards">
            <Card post={post} />
          </div>
        </div>
      </div>
    );
  }
}

export default CardList;
