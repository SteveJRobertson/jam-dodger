import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioButton from './AudioButton';

/**
 * The audio control panel component used to contain the play/pause/skip buttons.
 */
class AudioButtonPlayPause extends Component {
  render() {
    if (this.props.playing) {
      return (
        <AudioButton
          color={this.props.color}
          icon="pause"
          size="massive"
          onClick={this.props.onPauseClick}
        />
      );
    } else {
      return (
        <AudioButton
          color={this.props.color}
          icon="play"
          size="massive"
          onClick={this.props.onPlayClick}
        />
      );
    }
  }
}

AudioButtonPlayPause.defaultProps = {
  color: null,
  onPlayClick: null,
  onPauseClick: null,
  playing: null,
};

AudioButtonPlayPause.propTypes = {
  color: PropTypes.string,
  onPlayClick: PropTypes.func,
  onPauseClick: PropTypes.func,
  playing: PropTypes.bool,
};

export default AudioButtonPlayPause;
