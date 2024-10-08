import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScholarshipContainer from './ScholarshipContainer';
import StudentContainer from './StudentContainer';
import ApplicationContainer from './ApplicationContainer';
import NotificationContainer from './NotificationContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route path="/scholarships" component={ScholarshipContainer} />
          <Route path="/students" component={StudentContainer} />
          <Route path="/applications" component={ApplicationContainer} />
          <Route path="/notifications" component={NotificationContainer} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
