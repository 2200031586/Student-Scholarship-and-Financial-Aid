import React from 'react';

const Applications = ({ applications }) => {
  return (
    <div>
      <h1>Registered Applications</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Scholarship Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}> {/* Assuming each application has a unique id */}
              <td>{application.name}</td>
              <td>{application.email}</td>
              <td>{application.scholarshipName}</td>
              <td>{application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
