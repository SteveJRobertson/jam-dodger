import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

/**
 * The header component banner used at the top of the application.
 */
const Header = props => (
  <header className="jd-header ui inverted segment">
    <span className="ui white inverted huge header">{props.title}</span>
  </header>
);

Header.defaultProps = {
  title: 'Header Title',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
