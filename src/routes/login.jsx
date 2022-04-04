import React, {useState} from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import {Form, Container, Button, Row, Col, Card, Nav} from 'react-bootstrap'

export default function LoginPage(props) {
    
    return (
        <Card className="mt-5" background-color="powderblue !important">
            <Container>
                <Form className="mt-3 mb-3">
                    <Form.Group as={Col} className="justify-content-center" controlId="">
                        <Row className="col-3 h3">
                            <Form.Label > Log In </Form.Label>
                        </Row>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-2 mx-3" controlId="formBasicEmail">
                        <Form.Label> Email address </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 mx-3 mr-3" controlId="formBasicPassword">
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Row className="px-3">
                        <Button className="" variant="primary" type="submit"> Log In </Button>
                    </Row>
                    
                    <Row className="align-content-center">
                        <Nav.Link href="#home">Forget Password</Nav.Link>
                    </Row>

                    <hr style={{ color: 'black', backgroundColor: 'black', height: 5}} />

                    <Row className="justify-content-center">
                        <Col> <GoogleIcon> </GoogleIcon> </Col>
                        <Col> <FacebookIcon></FacebookIcon> </Col>
                        <Col> <TwitterIcon> </TwitterIcon> </Col>
                    </Row>

                    <Row className="px-3">
                        <Button>
                            Create New Account                            
                        </Button>
                    </Row>
                    
                    <hr style={{ color: 'black', backgroundColor: 'black', height: 5}} />

                    <Row>
                        <Nav.Link href="#home">Active</Nav.Link>
                    </Row>

                </Form>
            </Container>
        </Card>
    )
}


