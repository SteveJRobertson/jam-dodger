import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import jdConfig from '../jamdodger.config';
import './ProgressBar.css';

/**
 * A progress bar component to indicate the time left until the next API call.
 */
class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.startCountdown(this.props.nextInterval);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.progressBarStatus === 'running') {
      this.startCountdown(nextProps.nextInterval);
    } else if (nextProps && nextProps.progressBarStatus === 'paused') {
      this.stopCountdown();
    }
  }

  startCountdown(nextInterval) {
    const now = +moment().format('X');
    const timeToNextInterval = nextInterval - now;

    this.setState({
      styles: {
        animation: `countdown ${timeToNextInterval}s linear infinite`,
      },
    });
  }

  stopCountdown() {
    this.setState({
      styles: {
        animation: 'none',
      },
    });
  }

  render() {
    return (
      <div className="jd-progress ui tiny progress">
        <div className="bar" style={this.state.styles} />
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  progressBarStatus: 'paused',
  nextInterval: +moment().add(jdConfig.refreshRate, 'milliseconds').format('X'),
};

ProgressBar.propTypes = {
  progressBarStatus: PropTypes.string,
  nextInterval: PropTypes.number,
};

export default ProgressBar;
