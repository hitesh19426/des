import React from 'react'
import {Row, Col, Container, Table, } from 'react-bootstrap'

export default function EligibilityResultsPage() {
  return (
    <Container>
        <Col>
            <Row className="mt-5"> <h1> Results </h1> </Row>
            <Row> <p> Based on your scores, these institutes offer you degrees! </p> </Row>
            <Table className="table-borderless mt-5">
                <thead>
                    <tr>
                        <th scope="col">Institute </th>
                        <th scope="col">State</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Course</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>National Institute of Technology</td>
                        <td>Haryana</td>
                        <td>B.Tech</td>
                        <td>Computer Science Enginnering</td>
                    </tr>
                    <tr>
                        <td>Delhi Technological University</td>
                        <td>Delhi</td>
                        <td>B.Tech</td>
                        <td>Maths & Computing</td>
                    </tr>
                    <tr>
                        <td>Netaji Subhash University of Technology</td>
                        <td>Uttar Pradesh</td>
                        <td>B.Eng</td>
                        <td>Information Technology</td>
                    </tr>
                    <tr>
                        <td>Jaypee Institute of Technology</td>
                        <td>Haryana</td>
                        <td>B.Sc</td>
                        <td>Computer Science Enginnering</td>
                    </tr>
                    <tr>
                        <td>Indian Institute of Technology</td>
                        <td>Goa</td>
                        <td>B.Tech</td>
                        <td>Computer Enginnering</td>
                    </tr>
                    <tr>
                        <td>Delhi University</td>
                        <td>Delhi</td>
                        <td>B.Sc</td>
                        <td>Computer Science Diploma</td>
                    </tr>
                    <tr>
                        <td>National Institute of Technology</td>
                        <td>Bhopal</td>
                        <td>B.Tech</td>
                        <td>Electrical Enginnering</td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    </Container>
  )
}
