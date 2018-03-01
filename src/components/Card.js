import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Card.css';

class Card extends Component {
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
            alt={this.props.username}
          />
          <div className="header jd-time">{this.state.formattedTime}</div>
          <div className="meta jd-username">{this.props.username}</div>
          <div className="description jd-text">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  time: '',
  avatarUrl: '',
  username: '',
  description: '',
};

Card.propTypes = {
  time: PropTypes.string,
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
