import React from 'react';
import { Table } from 'react-bootstrap';

const ApplicationList = () => {
  return (
    <div className="application-list">
      <h1>Application List</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Student Name</th>
            <th>Scholarship Name</th>
            <th>Status</th>
            <th>Date Applied</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through application data here */}
          <tr>
            <td>APP-001</td>
            <td>John Doe</td>
            <td>Merit Scholarship</td>
            <td>Pending</td>
            <td>2022-01-01</td>
          </tr>
          <tr>
            <td>APP-002</td>
            <td>Jane Doe</td>
            <td>Need-Based Scholarship</td>
            <td>Approved</td>
            <td>2022-01-15</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ApplicationList;
