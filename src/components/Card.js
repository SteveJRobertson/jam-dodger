import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card jd-card">
        <div className="content">
          <img
            className="right floated mini ui image"
            src={this.props.post.avatarUrl}
            alt={this.props.post.username}
          />
          <div className="header">{this.props.post.username}</div>
          <div className="meta">{this.props.post.time}</div>
          <div className="description">{this.props.post.description}</div>
        </div>
      </div>
    );
  }
}

export default Card;
