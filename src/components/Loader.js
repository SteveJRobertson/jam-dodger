import React from 'react';
import PropTypes from 'prop-types';

/**
 * The loading spinner used when the app is initially loaded.
 */
const Loader = props => (
  <div className="ui active centered inline massive text loader">{props.text}</div>
);

Loader.defaultProps = {
  text: '',
};

Loader.propTypes = {
  text: PropTypes.string,
};

export default Loader;
