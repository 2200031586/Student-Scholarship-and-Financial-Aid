import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const { user } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/students/${id}`);
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudent();
  }, [id]);

  return (
    <div className="student-profile-container">
      <h1>Student Profile</h1>
      {user.role === 'admin' && (
        <h2>Admin View</h2>
      )}
      <div className="student-info">
        <h3>{student.name}</h3>
        <p>Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
        {user.role === 'student' && (
          <p>My Scholarship Applications: {student.applications}</p>
        )}
      </div>
      {user.role === 'admin' && (
        <div className="admin-actions">
          <Link to={`/students/edit/${id}`}>Edit Student</Link>
          <Link to={`/students/delete/${id}`}>Delete Student</Link>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
