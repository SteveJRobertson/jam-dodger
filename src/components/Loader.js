import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

/**
 * The containing dimmer wrapper for a loading spinner.
 */
class Loader extends Component {
  dimmerClasses() {
    const activeClass = !this.props.hasLoaded ? 'active ' : '';
    return `ui ${activeClass}inverted dimmer`;
  }

  render() {
    return (
      <div className={this.dimmerClasses()}>
        <LoadingSpinner
          hasLoaded={!this.props.hasLoaded}
          size={this.props.size}
          text={this.props.text}
        />
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
