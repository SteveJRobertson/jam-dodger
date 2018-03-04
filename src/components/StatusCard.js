import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './StatusCard.css';

/**
 * A card component displaying a single status update from Twitter.
 */
class StatusCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formattedTime: '',
    };
  }

  componentWillMount() {
    this.setState({
      formattedTime: moment(this.props.time).fromNow(),
    });
  }

  render() {
    return (
      <div className="card jd-card">
        <div className="content">
          <img
            className="right floated mini ui image"
            src={this.props.avatarUrl}
            alt={this.props.name}
          />
          <div className="header jd-time">{this.state.formattedTime}</div>
          <div className="meta jd-username">{this.props.name}</div>
          <div className="description jd-text">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

StatusCard.defaultProps = {
  time: '',
  avatarUrl: '',
  name: '',
  description: '',
};

StatusCard.propTypes = {
  time: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default StatusCard;
