import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import moment from 'moment';
import jdConfig from './jamdodger.config';
import Header from './components/Header';
import Loader from './components/Loader';
import StatusList from './components/StatusList';
import NoResults from './components/NoResults';
import fetchData from './api/fetchData';
import './App.css';

class App extends Component {
  static limitResultsByTime(statuses, period, unit) {
    return statuses.filter((status) => {
      const timeLimit = moment().subtract(period, unit);
      const statusCreatedAt = moment(status.created_at, jdConfig.momentTwitterDateFormat, 'en');

      return statusCreatedAt.diff(timeLimit) >= 0;
    });
  }

  static addNewStatusFlags(statuses, lastId) {
    if (lastId) {
      return statuses.map(status => ({
        ...status,
        newStatus: true,
      }));
    }

    return statuses;
  }

  static removeNewStatusFlags(statuses) {
    return statuses.map((status) => {
      const currentStatus = { ...status };
      currentStatus.newStatus = false;
      return currentStatus;
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      statusCount: 0,
      statuses: [],
    };
  }

  componentDidMount() {
    this.fetchTrafficData();
    this.loadInterval = setInterval(() => this.fetchTrafficData(), jdConfig.refreshRate);
  }

  componentWillUnmount() {
    clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

  fetchTrafficData() {
    // Get the most recent status ID from the list (i.e. the first one). If none, set to null.
    const lastId = this.state.statuses.length > 0 ? this.state.statuses[0].id_str : null;

    fetchData.traffic(fetch, lastId)
      // Remove any statuses which have already been returned
      .then(result => result.statuses
        .filter(status => _.find(this.state.statuses, status) === undefined))
      // Sort the statuses by ID in reverse order (highest number first)
      .then(statuses => statuses.sort((a, b) => +b.id - +a.id))
      // Remove any statuses older than the specified time limit
      .then(statuses => App.limitResultsByTime(
        statuses,
        jdConfig.timeLimit.value,
        jdConfig.timeLimit.units,
      ))
      // Add a 'newStatus' flag to each new status after the inital load
      .then(statuses => App.addNewStatusFlags(statuses, lastId))
      .then((newStatuses) => {
        this.setState((prevState) => {
          // Remove the 'newStatus' flag from the results which have already been returned
          const currentStatuses = App.removeNewStatusFlags(prevState.statuses);
          const statusList = _.uniqBy([...newStatuses, ...currentStatuses], 'id');

          // Merge the new statuses with the existing ones
          return {
            hasLoaded: true,
            statusCount: statusList.length,
            statuses: statusList,
          };
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header title={this.props.appTitle} />
        <Loader hasLoaded={this.state.hasLoaded} />
        <StatusList statuses={this.state.statuses} />
        <NoResults hasLoaded={this.state.hasLoaded} statusCount={this.state.statusCount} />
      </div>
    );
  }
}

App.defaultProps = {
  appTitle: null,
};

App.propTypes = {
  appTitle: PropTypes.string,
};

export default App;
