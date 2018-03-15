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

  componentWillReceiveProps() {
    if (this.props.startCountdown) {
      this.startCountdown();
    } else {
      this.stopCountdown();
    }
  }

  startCountdown() {
    const now = +moment().format('X');
    const timeToNextInterval = this.props.nextInterval - now;

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
  nextInterval: +moment().add(jdConfig.refreshRate, 'milliseconds').format('X'),
  startCountdown: false,
};

ProgressBar.propTypes = {
  nextInterval: PropTypes.number,
  startCountdown: PropTypes.bool,
};

export default ProgressBar;
