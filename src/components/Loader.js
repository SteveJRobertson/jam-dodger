import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * The loading spinner used when the app is initially loaded.
 */
class Loader extends Component {
  loaderClasses() {
    const sizeClass = this.props.size !== null ? `${this.props.size} ` : '';
    const textClass = this.props.text !== null ? 'text ' : '';
    return `ui active centered inline ${sizeClass}${textClass}loader`;
  }

  render() {
    console.log(this.loaderClasses());
    return <div className={this.loaderClasses()}>{this.props.text}</div>;
  }
}

Loader.defaultProps = {
  size: 'massive',
  text: null,
};

Loader.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Loader;
