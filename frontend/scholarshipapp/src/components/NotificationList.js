import React, { useState } from 'react';
import './NotificationList.css';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'scholarship-approved',
      scholarshipName: 'Merit Scholarship',
      approvedBy: 'Meruva',
      timestamp: '2023-03-01 14:30:00'
    },
    {
      id: 2,
      type: 'scholarship-rejected',
      scholarshipName: 'Need-Based Scholarship',
      rejectedBy: 'Gaddam',
      timestamp: '2023-02-20 10:45:00'
    },
    {
      id: 3,
      type: 'new-application',
      studentName: 'RGV',
      scholarshipName: 'Academic Excellence Scholarship',
      timestamp: '2023-03-05 12:00:00'
    },
    {
      id: 4,
      type: 'application-update',
      scholarshipName: 'Community Service Scholarship',
      updatedBy: 'Rajamouli',
      timestamp: '2023-02-25 16:15:00'
    }
  ]);

  return (
    <div className="notification-list">
      <h1>Notification List</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id} className={`notification-item ${notification.type}`}>
            <p>
              {notification.type === 'scholarship-approved' && (
                <span>Your scholarship application for {notification.scholarshipName} has been approved by {notification.approvedBy}!</span>
              )}
              {notification.type === 'scholarship-rejected' && (
                <span>Your scholarship application for {notification.scholarshipName} has been rejected by {notification.rejectedBy}.</span>
              )}
              {notification.type === 'new-application' && (
                <span>New scholarship application submitted by {notification.studentName} for {notification.scholarshipName}.</span>
              )}
              {notification.type === 'application-update' && (
                <span>Scholarship application for {notification.scholarshipName} updated by {notification.updatedBy}.</span>
              )}
            </p>
            <p className="notification-timestamp">Timestamp: {notification.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
