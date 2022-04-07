import React from 'react'
import {Container, Row, Col, } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container className="fluid block p-5" style={{'backgroundColor': '#F6F6FF', width: '100%'}} >
      <Row className="">
        <Col class="col-4 d-flex flex-column align-items-start">
            <h6 class="fw-bold fs-3" style={{color: '#410C76'}}>Legal</h6>
            <Container><a className="text-reset text-decoration-none" href="#footer">Terms</a></Container>
            <Container><a className="text-reset text-decoration-none" href="#footer">Conditions</a></Container>
            <Container><a className="text-reset text-decoration-none" href="#footer">Usage Policy</a></Container>
            <Container><a className="text-reset text-decoration-none" href="#footer">Privacy Policy</a></Container>
        </Col>
        <Col class="col-4 d-flex flex-column align-items-start">
            <h6 class="fw-bold fs-3" style={{color: '#410C76'}}>Quick Links</h6>
            <Container><a className="text-reset text-decoration-none" href="#about">About</a></Container>
            <Container><a className="text-reset text-decoration-none" href="#register">Registration</a></Container>
            <Container><a className="text-reset text-decoration-none" href="#courses">Courses</a></Container>
            <Container><a className="text-reset text-decoration-none" href="#consortium">Consortium</a></Container>
            <Container><a className="text-reset text-decoration-none" href="#team">Founders</a></Container>
        </Col>
        <Col class="col-4 d-flex flex-column align-items-start">
            <h6 class="fw-bold fs-3" style={{color: '#410C76'}}>Contact</h6>
            <Container>
                <a href="https://www.facebook.com/profile.php/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </Container>
            <Container><i class="fa-solid fa-house"></i> B-521, R&D Block, IIIT Delhi</Container>
            <Container><i class="fa-solid fa-phone"></i> +91-9876543210</Container>
            <Container><i class="fa-solid fa-envelope"></i> contact@desy.com</Container>
        </Col>
      </Row>
      <Row className="block text-center py-3 mt-5" style={{color: 'white', 'background-color': '#410C76'}}>
        <p>Copyright © 2022. Decentralised Education System</p>
      </Row>

    </Container>
  )
}
