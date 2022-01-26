import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

/**
 * Implement the read students information.
 *
 * The model definition is:
 * [{
 *  firstName: string,
 *  lastName: string,
 *  email: string,
 *  program: string
 * }]
 *
 * Replace the hardcoded data with the data from the following endpoint:
 * GET https://api-demo.kingslandtesting.com/student/
 */

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-demo.kingslandtesting.com/student")
      .then((response) => {
        return setStudents(response.data);
      });
  }, []);

  return (
    <Container className="h-100 d-flex flex-column align-items-start justify-content-center">
      <div className="white-wrap w-100">
        <h2>Students</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr>
                  <td>{student.firstName + " " + student.lastName}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Students;
