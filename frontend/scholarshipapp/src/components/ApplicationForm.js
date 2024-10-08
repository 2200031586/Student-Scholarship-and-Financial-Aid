import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ApplicationForm = () => {
  return (
    <Form className="application-form">
      <h2>Add Scholarship Application</h2>
      <Row>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Scholarship Name</Form.Label>
            <Form.Control type="text" placeholder="Enter scholarship name" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Application Deadline</Form.Label> 
            <Form.Control type="date" />
          </Form.Group>
        </Col>
        </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Eligibility Criteria</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Required Documents</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="exampleForm.ControlInput5">
        <Form.Label>Scholarship Description</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};


export default ApplicationForm;
