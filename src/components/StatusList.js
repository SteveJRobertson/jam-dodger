import React from 'react';
import PropTypes from 'prop-types';
import StatusCard from './StatusCard';

/**
 * A list of card components populated by a fetch call to Twitter.
*/
const StatusList = ({ statuses }) => {
  const statusCards = statuses.map(status => (
    <StatusCard
      key={`status-${status.id}`}
      avatarUrl={status.user.profile_image_url}
      name={status.user.name}
      time={status.created_at}
      description={status.full_text}
      newStatus={status.newStatus}
    />
  ));

  return (
    <div className="ui container">
      <div className="column">
        <div className="ui cards">{statusCards}</div>
      </div>
    </div>
  );
};

StatusList.defaultProps = {
  statuses: [],
};

StatusList.propTypes = {
  statuses: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.string,
    full_text: PropTypes.string,
    id: PropTypes.number,
    newStatus: PropTypes.bool,
    user: PropTypes.shape({
      name: PropTypes.string,
      profile_image_url: PropTypes.string,
    }),
  })),
};

export default StatusList;
