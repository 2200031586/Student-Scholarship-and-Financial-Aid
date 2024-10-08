import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScholarshipContainer from './containers/ScholarshipContainer';
import StudentContainer from './containers/StudentContainer';
import ApplicationContainer from './containers/ApplicationContainer';
import NotificationContainer from './containers/NotificationContainer';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/scholarships" element={<ScholarshipContainer />} />
      <Route path="/students" element={<StudentContainer />} />
      <Route path="/applications" element={<ApplicationContainer />} />
      <Route path="/notifications" element={<NotificationContainer />} />
    </Routes>
  );
};

export default RoutesComponent;

