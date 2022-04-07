import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'

export default function ContactPage() {
    return (
        <Container>
            <Row> <h1> Contact Us </h1> </Row>
            <Row> <p> We are working continously to serve you in the best way! </p> </Row>
            <Row>
                <Col className="col-6 col-md-4">
                    <p className="h3 mb-4"> Reach out to us? </p>
                    <p>
                        <strong>Address</strong>:<br/>B-521, 5th Floor,<br/>R&D Block, IIIT Delhi,<br/>New Delhi, India
                        <br/><br/>
                        <strong>Phone</strong>:<br/>+91-9876543210<br/>011-26268787
                        <br/><br/>
                        <strong>Email</strong>:<br/><a href="#contact">contact@desy.com</a>
                        <br/><br/>
                    </p>
                </Col>
                <Col className="col-12 col-md-8">
                    <p className="h3 mb-4"> Have a question? </p>
                    <Form>
                        <Row className="my-3">
                            <Form.Group as={Col} controlId="dob">
                                <Form.Label> First Name </Form.Label>
                                <Form.Control type="text" placeholder="First Name" aria-describedby="first name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="gender">
                                <Form.Label> Last Name </Form.Label>
                                <Form.Control type="text" placeholder="Last Name" aria-describedby="last name"/>
                            </Form.Group>
                        </Row>
                        <Row className="my-3">
                            <Form.Group as={Col} controlId="number">
                                <Form.Label> Number </Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone Number" aria-describedby="enter phone number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label> Email </Form.Label>
                                <Form.Control type="text" placeholder="Enter Email" aria-describedby="Enter Email" />
                            </Form.Group>
                        </Row>
                        <Row className="my-3">
                            <Form.Group as={Col} controlId="message">
                                <Form.Label> Message </Form.Label>
                                <Form.Control type="text" placeholder="Enter Messgage" aria-describedby="Enter Messgage" />
                            </Form.Group>
                        </Row>
                        <Button className="" type="submit" style={{backgroundColor: '#EBEBFF', color: 'black'}}> Submit </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}