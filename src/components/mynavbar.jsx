import React from 'react'
import {Link} from 'react-router-dom'

import { Navbar, Container, Nav, Button, Row, Col, } from 'react-bootstrap';

export default function MyNavBar() {
    return (
        
            // {/* <h3> Navbar </h3> */}
            // {/* <nav>
            //     <Link to = "/"> DESy </Link>
            //     <Link to = "/about"> About </Link>
            //     <Link to = "/eligibility"> Eligibility </Link>
            //     <Link to = "/courses" > Courses </Link>
            //     <Link to = "/founders" > Founders </Link>
            //     <Link to = "/contact"> Contact </Link>
            //     <Link to = "/login"> Login </Link>
            //     <Link to = "/signup"> Sign Up </Link>
            // </nav> */}

          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/">DESy</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/eligibility">Eligibility</Nav.Link>
                  <Nav.Link href="/courses">Courses</Nav.Link>
                  <Nav.Link href="/founders">Fouunders</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/student_login">Login</Nav.Link>
                  <Nav.Link eventKey={2} href="/student_signup">
                    Sign Up
                  </Nav.Link>
                  {/* <Button variant="primary" href="/login" > Sign Up </Button>{' '}
                  <Button variant="primary" href="/login" > Login </Button> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    )
}