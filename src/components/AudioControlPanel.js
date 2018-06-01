import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioButton from './AudioButton';
import AudioButtonPlayPause from './AudioButtonPlayPause';
import './AudioControlPanel.css';

/**
 * The audio control panel component used to contain the play/pause/skip buttons.
 */
class AudioControlPanel extends Component {
  static readStatus(statusToRead) {
    const speech = window.speechSynthesis;
    const readThis = new SpeechSynthesisUtterance(statusToRead);
    speech.speak(readThis);
  }

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      speech: window.speechSynthesis,
      speechQueue: [],
      statusQueue: [],
    };
  }

  componentDidMount = () => {
    this.state.speech.cancel();
  }

  handlePlayClick = () => {
    this.setState({
      playing: true,
    }, () => {
      if(this.state.speech.speaking) {
        this.state.speech.resume();
      } else {
        this.handleUpdateStatusList();
      }
    });
  }

  handlePauseClick = () => {
    this.setState({
      playing: false,
    }, () => {
      this.pauseReading();
    });
  }

  handleUpdateStatusList = () => {
    this.setState({
      statusQueue: this.props.statuses.map(status => status.full_text),
    }, () => {
      this.startReading();
    });
  }

  startReading = () => {
    this.setState({
      playing: true,
    });

    if(this.state.speech.speaking) {
      this.state.speech.resume();
    } else {
      this.state.statusQueue.forEach(status => {
        this.readStatus(status);
      });
    }
  };

  readStatus = (statusToRead) => {
    const readThis = new SpeechSynthesisUtterance(statusToRead);
    this.state.speech.speak(readThis);
  };

  pauseReading = () => {
    this.state.speech.pause();
  }

  render() {
    return (
      <div className="jd-audio-controls ui footer segment">
        <div className="ui fluid buttons">
          <AudioButton
            color={this.props.buttonColor}
            icon="fast backward"
            size="large"
          />
          <AudioButtonPlayPause
            color={this.props.buttonColor}
            onPlayClick={this.handlePlayClick}
            onPauseClick={this.handlePauseClick}
            playing={this.state.playing}
          />
          <AudioButton
            color={this.props.buttonColor}
            icon="fast forward"
            size="large"
          />
        </div>
      </div>
    );
  }
}

AudioControlPanel.defaultProps = {
  buttonColor: 'black',
  statuses: [],
};

AudioControlPanel.propTypes = {
  buttonColor: PropTypes.string,
  statuses: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.string,
    full_text: PropTypes.string,
    id: PropTypes.number,
    newStatus: PropTypes.bool,
    user: PropTypes.shape({
      name: PropTypes.string,
      profile_image_url: PropTypes.string,
    }),
  })),
};

export default AudioControlPanel;
