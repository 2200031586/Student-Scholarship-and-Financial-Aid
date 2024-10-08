import React, { useState, useEffect } from 'react';
import NotificationList from '../components/NotificationList';
import { fetchNotifications } from '../actions/notificationActions';
import { connect } from 'react-redux';

const NotificationContainer = ({ notifications, fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="notification-container">
      <NotificationList notifications={notifications} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  };
};

export default connect(mapStateToProps, { fetchNotifications })(NotificationContainer);
