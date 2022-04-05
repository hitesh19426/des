import React from 'react'
import { Navbar, Container, Nav, } from 'react-bootstrap';

export default function MyNavBar() {
    return (
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/">DESy</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/eligibility">Eligibility</Nav.Link>
                  <Nav.Link href="/courses">Courses</Nav.Link>
                  <Nav.Link href="/founders">Founders</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/student_login">Login</Nav.Link>
                  <Nav.Link href="/student_signup"> Sign Up </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    )
}