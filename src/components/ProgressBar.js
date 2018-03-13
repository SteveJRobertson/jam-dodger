import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    this.getProgress();
  }

  getProgress() {
    const timeIntervalInSecs = jdConfig.refreshRate / jdConfig.countdownRate;
    const timeLeft = timeIntervalInSecs - this.props.elapsed;
    const remainingPercentageString = `${((100 / timeIntervalInSecs) * timeLeft).toString()}%`;

    this.setState({
      styles: {
        width: remainingPercentageString,
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
  elapsed: 0,
};

ProgressBar.propTypes = {
  elapsed: PropTypes.number,
};

export default ProgressBar;
