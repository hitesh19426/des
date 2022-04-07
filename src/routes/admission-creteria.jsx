import React from 'react'
import {Container, Row, Col, Table} from 'react-bootstrap'

export default function AdmissionCreteriaPage() {
  return (
    <Container className="pt-5">
         <Col>
            <Row> <h1> Admission Criteria </h1> </Row>
            <Row> <p> Check if you fulfill the requirement to join the institution. </p> </Row> 
            <Table className="table-borderless mt-5">
                <tbody>
                    <tr>
                        <td>Name of institute:</td>
                        <td>National Institute of Technology, Delhi</td>
                    </tr>
                    <tr>
                        <td>Stream:</td>
                        <td>Computer Science</td>
                    </tr>
                    <tr>
                        <td>Maximum Seat Count</td>
                        <td>400</td>
                    </tr>
                    <tr>
                        <td>Minimum Age</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>Minimum Entrance Exam Rank</td>
                        <td>12,000</td>
                    </tr>
                    <tr>
                        <td>Minimum Class 10 Marks</td>
                        <td>80%</td>
                    </tr>
                    <tr>
                        <td>Minimum Class 12 Marks</td>
                        <td>80%</td>
                    </tr>
                    <tr>
                        <td>Extras</td>
                        <td>CBSE Board</td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    </Container>
  )
}
