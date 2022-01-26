import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

/**
 * Implement the user registration functionality.
 *
 * You may limit your model to:
 * {
 *  firstName: string,
 *  lastName: string,
 *  username: string,
 *  password: string,
 * }
 *
 * When the form is saved, send your payload to the following endpoint:
 * POST https://api-demo.kingslandtesting.com/user/register
 */
const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      password: data.password,
    };

    await axios
      .post("https://api-demo.kingslandtesting.com/user/register", userData, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) setRegistered(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="white-wrap d-flex">
        <Row className="d-flex align-items-center">
          <Col>
            <h2>Register</h2>
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

              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </Form.Group>
              {registered ? (
                <Alert variant="success">Registration success</Alert>
              ) : (
                <Button variant="primary" type="submit">
                  Register
                </Button>
              )}
            </Form>
          </Col>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            sem id neque auctor interdum a in enim. Phasellus mollis dapibus
            quam commodo eleifend. Phasellus eu nibh sapien. Donec aliquet sem
            nec lorem condimentum ultricies. Ut vulputate aliquam turpis non
            pretium. Nulla leo arcu, bibendum vel lorem quis, sodales laoreet
            ante. Duis sit amet lectus porttitor, faucibus metus sed, elementum
            arcu. Cras quis nisl elementum felis malesuada tristique eu sit amet
            arcu. Nam velit lacus, sagittis eget diam ut, interdum blandit dui.
            Duis leo mi, tincidunt a consequat vel, mollis vel nisl. Ut ultrices
            malesuada sem quis lacinia. Aliquam porta ut ligula ut eleifend.
            Etiam tempus mauris sit amet erat sodales fermentum id sed sapien.
            Phasellus vitae condimentum magna, sed congue est. Vivamus tincidunt
            interdum mauris sit amet vulputate. Vestibulum viverra tincidunt
            sapien, vitae semper nunc blandit vel.
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
