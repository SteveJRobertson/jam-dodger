import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * The loading spinner used when the app is initially loaded.
 */
class LoadingSpinner extends Component {
  loadingSpinnerClasses() {
    const activeClass = !this.props.hasLoaded ? 'active ' : '';
    const sizeClass = `${this.props.size} `;
    const textClass = this.props.text !== null ? 'text ' : '';
    return `ui ${activeClass}centered inline ${sizeClass}${textClass}loader`;
  }

  render() {
    return (
      <div className={this.loadingSpinnerClasses()}>{this.props.text}</div>
    );
  }
}

LoadingSpinner.defaultProps = {
  hasLoaded: false,
  size: 'massive',
  text: null,
};

LoadingSpinner.propTypes = {
  hasLoaded: PropTypes.bool,
  size: PropTypes.string,
  text: PropTypes.string,
};

export default LoadingSpinner;
