import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

/**
 * Implement the add student interaction.
 *
 * The model is limited to:
 * {
 *  firstName: string,
 *  lastName: string,
 *  email: string,
 *  course: string
 * }
 *
 * When the form is saved, send your payload to the following endpoint:
 * POST https://api-demo.kingslandtesting.com/student
 */
const AddStudent = () => {
  const [addedStudent, setAddedStudent] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      course: data.course,
    };

    await axios
      .post("https://api-demo.kingslandtesting.com/student", studentData, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) setAddedStudent(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="white-wrap w-50">
        <h2>Add Student</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProgram">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course"
              name="course"
              value={data.course}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </Form.Group>
          {addedStudent ? (
            <Alert variant="success">Student added successfully</Alert>
          ) : (
            <Button variant="primary" type="submit">
              Add
            </Button>
          )}
        </Form>
      </div>
    </Container>
  );
};

export default AddStudent;
