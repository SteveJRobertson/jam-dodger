import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import moment from 'moment';
import jdConfig from '../jamdodger.config';
import StatusCard from './StatusCard';
import fetchData from '../api/fetchData';

/**
 * A list of card components populated by a fetch call to Twitter.
*/
class StatusList extends Component {
  static limitResultsByTime(statuses, period, unit) {
    return statuses.filter((status) => {
      const timeLimit = moment().subtract(period, unit);
      const statusCreatedAt = moment(status.created_at, jdConfig.momentTwitterDateFormat, 'en');

      return statusCreatedAt.diff(timeLimit) >= 0;
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      statuses: [],
    };
  }

  componentDidMount() {
    this.fetchTrafficData();
    this.loadInterval = setInterval(() => this.fetchMoreTrafficData(), jdConfig.refreshRate);
  }

  componentWillUnmount() {
    clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

  fetchTrafficData() {
    fetchData.traffic(fetch)
      .then((result) => {
        this.setState({
          statuses: StatusList.limitResultsByTime(
            result.statuses,
            jdConfig.timeLimit.value,
            jdConfig.timeLimit.units,
          ),
        });
      });
  }

  fetchMoreTrafficData() {
    const lastId = this.state.statuses[0].id;
    fetchData.traffic(fetch, lastId)
      .then((result) => {
        this.setState((prevState) => {
          const newStatusList = _.uniqBy(result.statuses.concat(prevState.statuses), 'id');

          return {
            statuses: StatusList.limitResultsByTime(
              newStatusList,
              jdConfig.timeLimit.value,
              jdConfig.timeLimit.units,
            ),
          };
        });
      });
  }

  render() {
    const statusCards = this.state.statuses.map(status => (
      <StatusCard
        key={`status-${status.id}`}
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
