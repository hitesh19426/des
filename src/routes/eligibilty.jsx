import React from 'react'
import {Row, Col, Container, Form, Button, } from 'react-bootstrap'

export default function EligibilityPage() {
    return (
        <Container className="my-5">
            <Col>
                <Row> <h1> Eligibilty </h1> </Row>
                <Row> <p> Find the perfect courses that meet your eligibilty </p> </Row> 
                <Row>
                    <Col className="col-12 col-md-6">
                        <Form>
                            <Row className="my-3">
                                <Col>
                                    <Form.Group controlId="name">
                                        <Form.Label> Name </Form.Label>
                                        <Form.Control type="name" placeholder="Enter Name" aria-describedby="enter name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Form.Group as={Col} controlId="dob">
                                    <Form.Label> Date Of Birth </Form.Label>
                                    <Form.Control type="date" placeholder="Enter Date of Birth" aria-describedby="Enter Email" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="gender">
                                    <Form.Label> Gender </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                            </Row>
                            <Row className="my-3">
                                <Form.Group as={Col} controlId="location">
                                    <Form.Label> Location </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Location" aria-describedby="enter location" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="rank">
                                    <Form.Label> Entrance Exam Rank </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Entrance Exam Rank" aria-describedby="Enter entrance Exam Rank" />
                                </Form.Group>
                            </Row>
                            <Row className="my-3">
                                <Form.Group as={Col} controlId="marks10">
                                    <Form.Label> Class 10 Marks </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Class 10 marks" aria-describedby="class 10 marks" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="marks12">
                                    <Form.Label> Class 12 Marks </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Class 12 marks" aria-describedby="class 12 marks"/>
                                </Form.Group>
                            </Row>
                            <Button className="text-center" as="a" href="eligibility/results"> Fetch Results </Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}