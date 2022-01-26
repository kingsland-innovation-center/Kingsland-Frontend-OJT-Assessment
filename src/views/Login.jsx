import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/**
 * Implement the login functionality.
 *
 * Given a username and password, check the database for a match.
 * If a match is found, log the user in.
 *
 * Use the following endpoint to check for a username and password match:
 * POST https://api-demo.kingslandtesting.com/user/login
 *
 * Then, redirect appropriately to /dashboard and adjust the sidebar menuitems accordingly.
 */
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigateTo = (path) => {
    setTimeout(() => {
      navigate(path, { replace: true });
      window.location.reload(false);
    }, 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: data.username,
      password: data.password,
    };

    await axios
      .post("https://api-demo.kingslandtesting.com/user/login", userData, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log(response.data);
        const loggedInUserName =
          response.data.firstName + " " + response.data.lastName;
        if (response.data) {
          localStorage.setItem("Authentication", "true");
          localStorage.setItem("Name", loggedInUserName);
          navigateTo("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        localStorage.setItem("Authentication", "false");
        navigateTo("/login");
      });
  };

  return (
    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="white-wrap">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
