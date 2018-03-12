import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * The loading spinner used when the app is initially loaded.
 */
class Loader extends Component {
  dimmerClasses() {
    const activeClass = !this.props.hasLoaded ? 'active ' : '';
    return `ui ${activeClass}inverted dimmer`;
  }

  loaderClasses() {
    const sizeClass = this.props.size !== null ? `${this.props.size} ` : '';
    const textClass = this.props.text !== null ? 'text ' : '';
    return `ui ${sizeClass}${textClass}loader`;
  }

  render() {
    return (
      <div className={this.dimmerClasses()}>
        <div className={this.loaderClasses()}>{this.props.text}</div>
      </div>
    );
  }
}

Loader.defaultProps = {
  hasLoaded: false,
  size: 'massive',
  text: null,
};

Loader.propTypes = {
  hasLoaded: PropTypes.bool,
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Loader;
