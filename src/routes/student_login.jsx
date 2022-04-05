import React, {useState} from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import {Form, Container, Button, Row, Col, Card, Nav} from 'react-bootstrap'

export default function StudentLoginPage(props) {
    
    return (
        <Card className="mt-5 mx-auto col-5" style={{'background-color': '#F6F6FF'}} >
            <Container className="">
                <Col>
                    <Form className="mt-3 mb-3">
                        <Form.Group as={Col} className="text-center" controlId="">
                            <Row className="h3">
                                <Form.Label > <b> Log In </b> </Form.Label>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-2 mx-5" controlId="formBasicEmail">
                            {/* <Form.Label> Email address </Form.Label> */}
                            <Form.Control type="email" placeholder="Enter email" className="sz" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 mx-5" controlId="formBasicPassword">
                            {/* <Form.Label> Password </Form.Label> */}
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Row className="mx-5">
                            <Button className="" variant="primary" type="submit"> Log In </Button>
                        </Row>
                        
                        <Row className="text-center">
                            <Nav.Link href="#home" style={{color: 'black'}}>Forget Password</Nav.Link>
                        </Row>

                        <hr style={{height: 3}} />

                        <Row className="text-center mb-3" >
                            <Col className="" >
                                <GoogleIcon sx={{fontSize:50}} color="warning" /> 
                            </Col>
                            <Col className="" >
                                <FacebookIcon sx={{fontSize:50}} color="warning" />
                            </Col>
                            <Col className="" >
                                <TwitterIcon sx={{fontSize:50}} color="warning" />
                            </Col>
                        </Row>

                        <Row className="mx-5">
                            <Button variant='success'> Create New Account </Button>
                        </Row>
                        
                        <hr style={{height: 3}} />

                        <Row className="text-center">
                            <Nav.Link href="institute_login" style={{color: 'black'}} > Sign in as institute? </Nav.Link>
                        </Row>

                    </Form>
                </Col>
            </Container>
        </Card>
    )
}


