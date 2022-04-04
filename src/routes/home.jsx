import React from 'react'
import {Col, Row, Container, Image} from 'react-bootstrap'
import homepic from './../images/homepic.png'

export default function HomePage() {
  return (
    <Container className="">
        <Row className="mt-5 ms-5">
            <Col className="me-5 justify-content-end">
                <Row className="mb-5"> 
                    <p className="h1 text-primary ms-0"><b> DESy </b></p>
                </Row>
                <Row className="mb-5 h3"><b> A decentralized education network for students </b> </Row>
                <Row className="mb-5"><b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit ab ex iure minus totam molestiae est doloribus ullam, necessitatibus harum explicabo eos repellat molestias? Nemo reprehenderit explicabo facere ad? </b> </Row>
            </Col>
            <Col className="ms-5 justify-content-center">
                <Row>
                    <Image src={homepic} alt="Home Page Image" />
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
