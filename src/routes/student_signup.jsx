import React from 'react'
import {Card, Form, Container, Col, Row, Button, Nav} from 'react-bootstrap'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function StudentSignupPage() {
  return (
    <Card className="mt-5 mx-auto col-sm-auto col-md-6" style={{'background-color': '#F6F6FF'}} >
            <Container className="">
                <Col>
                    <Form className="mt-3 mb-3">
                        <Form.Group as={Col} className="text-center" controlId="">
                            <Row className="h3">
                                <Form.Label > <b> Sign Up </b> </Form.Label>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2 mx-5" controlId="formBasicEmail">
                            <Form.Control placeholder="Name" />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-2 mx-5" controlId="formBasicEmail">
                            <Form.Control placeholder="Email" />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 mx-5" controlId="formBasicPassword">
                            <Form.Control placeholder="Age" />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 mx-5" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 mx-5" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Reconfirm Password" />
                        </Form.Group>

                        <Row className="mx-5">
                            <Button variant="success" type="submit" href="/dashboard"> Sign Up </Button>
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

                        <hr style={{height: 3}} />

                        <Row className="text-center">
                            <Nav.Link href="/institute_signup" style={{color: 'black'}} > Sign up as institute? </Nav.Link>
                        </Row>

                    </Form>
                </Col>
            </Container>
        </Card>
  )
}
