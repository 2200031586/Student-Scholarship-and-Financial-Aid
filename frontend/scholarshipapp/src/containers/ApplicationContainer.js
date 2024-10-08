import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import Applications from '../components/Applications';
import applications from '../utils/mockData';
import './ApplicationContainer.css'; // Import CSS file

const ApplicationContainer = () => {
  return (
    <div className="application-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ApplicationForm />
            <Applications applications={applications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationContainer;
