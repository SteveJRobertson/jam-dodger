import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioButton from './AudioButton';
import './AudioControlPanel.css';

/**
 * The audio control panel component used to contain the play/pause/skip buttons.
 */
class AudioControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.readPlaylist();
  }

  readPlaylist() {
    console.log(this.props.playlist);
  }

  render() {
    return (
      <div className="jd-audio-controls ui footer segment">
        <div className="ui fluid buttons">
          <AudioButton
            color={this.props.buttonColor}
            icon="fast backward"
            size="large"
            onClick="handleSkipBack"
          />
          <AudioButton
            color={this.props.buttonColor}
            icon="play"
            size="massive"
            onClick="handlePlayPause"
          />
          <AudioButton
            color={this.props.buttonColor}
            icon="fast forward"
            size="large"
            onClick="handleSkipForward"
          />
        </div>
      </div>
    );
  }
}

AudioControlPanel.defaultProps = {
  buttonColor: 'black',
  playlist: [],
};

AudioControlPanel.propTypes = {
  buttonColor: PropTypes.string,
  playlist: PropTypes.arrayOf(PropTypes.string),
};

export default AudioControlPanel;
