import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
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
    this.fetchTrafficData();
    this.loadInterval = setInterval(() => this.fetchMoreTrafficData(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

  fetchTrafficData() {
    fetchData.traffic(fetch)
      .then((result) => {
        this.setState({
          statuses: result.statuses,
        });
      });
  }

  fetchMoreTrafficData() {
    fetchData.traffic(fetch)
      .then((result) => {
        this.setState(prevState => ({
          statuses: _.uniqBy(prevState.statuses.concat(result.statuses), 'id'),
        }));
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
