import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

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
  return (
    <Container className='h-100 d-flex flex-column align-items-start justify-content-center'>
      <div className='white-wrap w-100'>
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
            <tr>
              <td>Sean Cadubla</td>
              <td>Zero-to-Blockchain Program</td>
              <td>sean@kingsland.io</td>
            </tr>
            <tr>
              <td>Rave Arevalo</td>
              <td>Full Stack Developer Program</td>
              <td>rave@kingsland.io</td>
            </tr>
            <tr>
              <td>Pia Bonilla</td>
              <td>Tech Sales Program</td>
              <td>pia@kingsland.io</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Students;
