import React, { Component } from 'react';
import Card from './Card';
import fetch from 'isomorphic-fetch';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('https://node-twitter-rest-api.herokuapp.com/search/tweets?q=%23edintravel')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          posts: result.statuses,
        });
      });
  }

  render() {
    const cards = this.state.posts.map(post => (
      <Card
        key={`post-${post.id}`}
        avatarUrl={post.user.profile_image_url}
        username={post.user.screen_name}
        time={post.created_at}
        description={post.text}
      />
    ));

    return (
      <div className="ui container">
        <div className="column">
          <div className="ui cards">{cards}</div>
        </div>
      </div>
    );
  }
}

export default CardList;
