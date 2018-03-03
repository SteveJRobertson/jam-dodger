import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import StatusCard from './StatusCard';
import fetchData from '../api/fetchData';

class StatusList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statuses: [],
    };
  }

  componentDidMount() {
    fetchData.traffic(fetch)
      .then((result) => {
        this.setState({
          statuses: result.statuses,
        });
      });
  }

  render() {
    const statusCards = this.state.statuses.map(status => (
      <StatusCard
        key={`post-${status.id}`}
        avatarUrl={status.user.profile_image_url}
        name={status.user.name}
        time={status.created_at}
        description={status.text}
      />
    ));

    return (
      <div className="ui container">
        <div className="column">
          <div className="ui cards">{statusCards}</div>
        </div>
      </div>
    );
  }
}

export default StatusList;
