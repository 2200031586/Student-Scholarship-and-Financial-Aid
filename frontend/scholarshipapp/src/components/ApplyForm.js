import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ApplyForm.css'; // Import CSS for ApplyForm

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    scholarshipName: '',
    university: '',
    major: '',
    CGPA: '',
    essay: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your application logic here (e.g., API call)
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="apply-form-container">
      <h2>Apply for Scholarship</h2>
      <Form onSubmit={handleSubmit} className="apply-form">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicScholarshipName">
          <Form.Label>Scholarship Name:</Form.Label>
          <Form.Control
            type="text"
            name="scholarshipName"
            value={formData.scholarshipName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicUniversity">
          <Form.Label>University:</Form.Label>
          <Form.Control
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicMajor">
          <Form.Label>Major:</Form.Label>
          <Form.Control
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicGPA">
          <Form.Label>CGPA:</Form.Label>
          <Form.Control
            type="number"
            name="GPA"
            value={formData.GPA}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEssay">
          <Form.Label>Essay (500 words):</Form.Label>
          <Form.Control
            as="textarea"
            name="essay"
            rows={3}
            value={formData.essay}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Apply Now
        </Button>
      </Form>
    </div>
  );
};

export default ApplyForm;
