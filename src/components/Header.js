import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import './Header.css';

/**
 * The header component banner used at the top of the application.
 */
const Header = props => (
  <div>
    <header className="jd-header ui inverted segment">
      <span className="ui white inverted huge header">{props.title}</span>
    </header>
    <ProgressBar elapsed={props.elapsed} />
  </div>
);

Header.defaultProps = {
  elapsed: 0,
  title: 'Header Title',
};

Header.propTypes = {
  elapsed: PropTypes.number,
  title: PropTypes.string,
};

export default Header;
