import React, { useState, useEffect } from 'react';
import StudentProfile from '../components/StudentProfile';
import { fetchStudents } from '../actions/studentActions';
import { connect } from 'react-redux';

const StudentContainer = ({ students, fetchStudents }) => {
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="student-container">
      <StudentProfile students={students} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

export default connect(mapStateToProps, { fetchStudents })(StudentContainer);
