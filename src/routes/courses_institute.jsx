import React from 'react'
import {Col, Row, Container, Nav, ListGroup, Button, } from 'react-bootstrap'

const consortiumButtonStlye = {
    'backgroundColor': '#e2e2fd',
    'color': 'black',
}

function InstituteListItem(props){
    return (
        <ListGroup.Item action style={{'backgroundColor': '#F6F6FF'}} onClick={() => console.log(props.value, 'function called')} >
            <Row>
                <Container className="col-7 align-self-center">{props.name}, {props.location}</Container>
                <Button className="col-2 " style={consortiumButtonStlye} > Admission Creteria </Button>
                <Button className="col-2 ms-2" style={consortiumButtonStlye} href="/institute/consortium-partners"> Consortium Partners </Button>
            </Row>
        </ListGroup.Item>
    )
}

const institutes = [ 
    {serial: 1, name: 'National Institute of Technology', location: 'Delhi', }, 
    {serial: 2, name: 'Indraprastha Institute of Information Technology', location: 'Delhi', },
    {serial: 3, name: ' International Institute of Information Technology', location: 'Hyderabad', },
    {serial: 4, name: 'Indian Institute of Technology', location: 'Delhi', },
    {serial: 5, name: 'Indraprastha Institute of Information Technology', location: 'Delhi', },
    {serial: 6, name: 'International Institute of Information Technology', location: 'Alabahad', },
    {serial: 7, name: 'National Institute of Technology', location: 'Trichi', },
    {serial: 8, name: 'National Institute of Technology', location: 'Manipur', },
    {serial: 9, name: 'Indian Institute of Technology', location: 'Kharagpur', },
    {serial: 10, name: 'Indian Institute of Technology', location: 'Bombay', },
    {serial: 11, name: 'Indian Institute of Technology', location: 'Madras', },
    {serial: 12, name: 'Indian Institute of Technology', location: 'Mandi', },
    {serial: 13, name: 'National Institute of Technology', location: 'Kanpur', },
    {serial: 14, name: 'National Institute of Technology', location: 'Guwahati', },
    {serial: 15, name: 'National Institute of Technology', location: 'Roorkee', },
]

export default function CoursesInstitutePage() {
  return (
    <Container>
        <Col>
            <Row className="mt-5 mb-5">
                <Col>
                    <Row> <h1> Institutes </h1> </Row>
                    <Row> <h6> These institutes offer a degree in Computer Science </h6> </Row>
                </Col>
                <Col className="col-3 align-self-end">
                    <Nav.Link href="#browse_all"> Browse All </Nav.Link>
                </Col>
            </Row>
            <ListGroup>
                {institutes.map((institute) => 
                    <InstituteListItem name={institute.name} location={institute.location} key={institute.serial} value={institute.serial} />
                )}
            </ListGroup>
        </Col>
    </Container>
  )
}
