import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ScholarshipList from './components/ScholarshipList';
import ScholarshipCard from './components/ScholarshipCard';
import StudentProfile from './components/StudentProfile';
import ApplicationForm from './components/ApplicationForm';
import NotificationList from './components/NotificationList';
import ApplicationContainer from './containers/ApplicationContainer';
import Students from './components/Students';
import ApplyForm from './components/ApplyForm';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scholarships" element={<ScholarshipList />} />
          <Route path="/student-profile/:id" element={<StudentProfile />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/notifications" element={<NotificationList />} />
          <Route path="/students" element={<Students />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/scholarshipcard" element={<ScholarshipCard />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/applications" element={<ApplicationContainer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


