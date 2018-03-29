import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AudioButton.css';

/**
 * The audio control panel component used to contain the play/pause/skip buttons.
 */
class AudioButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <button className={`jd-audio-button ${this.props.size} ui ${this.props.color} icon button`}>
        <i className={`${this.props.icon} icon`} />
      </button>
    );
  }
}

AudioButton.defaultProps = {
  color: 'black',
  icon: 'play',
  size: 'huge',
};

AudioButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
};

export default AudioButton;
