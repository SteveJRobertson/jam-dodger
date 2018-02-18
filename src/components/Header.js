import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="jd-header ui inverted segment">
        <span className="ui white inverted huge header">
          {this.props.title}
        </span>
      </header>
    );
  }
}

export default Header;
