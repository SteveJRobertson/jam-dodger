import React, { Component } from 'react';
import moment from 'moment';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formattedTime: ''
    };
  }

  componentDidMount() {
    this.setState({
      formattedTime: moment(this.props.time).fromNow()
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
          <div className="header">{this.state.formattedTime}</div>
          <div className="meta">{this.props.username}</div>
          <div className="description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Card;
