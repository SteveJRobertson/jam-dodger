import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NoResults.css';

/**
 * The content to display when no results are returned.
 */
class NoResults extends Component {
  noResultsClasses() {
    const activeClass = this.props.hasLoaded ? 'has-loaded ' : '';
    const countClass = this.props.statusCount === 0 ? 'has-no-results ' : '';
    return `ui container jd-no-results ${activeClass}${countClass}`;
  }

  render() {
    return (
      <div className={this.noResultsClasses()}>
        <div className="ui column jd-no-results-txt">
          <h2>{this.props.text}</h2>
        </div>
      </div>
    );
  }
}

NoResults.defaultProps = {
  hasLoaded: true,
  statusCount: 0,
  text: 'No results found',
};

NoResults.propTypes = {
  hasLoaded: PropTypes.bool,
  statusCount: PropTypes.number,
  text: PropTypes.string,
};

export default NoResults;
