import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', { name, email, password });
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <Form onSubmit={handleSubmit} className="register-form">
        <Form.Group controlId="formBasicName" className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="mb-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="button-container">
          <Button variant="primary" type="submit" className="register-btn">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
