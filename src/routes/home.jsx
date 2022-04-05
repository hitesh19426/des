import React from 'react'
import {Col, Row, Container, Image} from 'react-bootstrap'
import homepic from './../images/homepic.png'

export default function HomePage() {
  return (
    <Container className="">
        <Row className="mt-5 ms-5 align-items-center">
            <Col className="">
                <Row className="mb-3"> 
                    <p className="h1 text-primary ms-0"><b> DESy </b></p>
                </Row>
                <Row className="mb-5 h3"><b> A decentralized education network for students </b> </Row>
                <Row className="mb-5"><b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit ab ex iure minus totam molestiae est doloribus ullam, necessitatibus harum explicabo eos repellat molestias? Nemo reprehenderit explicabo facere ad? </b> </Row>
            </Col>
            <Col className="">
                <Row className="">
                    <Image className="fluid"  src={homepic} alt="Home Page Image" />
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
