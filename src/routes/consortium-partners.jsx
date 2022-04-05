import React from 'react'
import {ListGroup, Container, Col, Row, Nav} from 'react-bootstrap'

const consortiumButtonStlye = {
    'backgroundColor': '#e2e2fd',
    'color': 'black',
    'borderRadius': '25px',
}

function InstituteListItem(props){
    return (
        <ListGroup.Item action className="my-2 py-2 ps-4 fs-5 " style={consortiumButtonStlye} >
                {props.name}, {props.location}
        </ListGroup.Item>
    )
}

const institutes = [
    // {title: 'Computer Science', count: 12, icon: <ComputerIcon sx={{fontSize:50}} color="primary" />}, 
    {serial: 1, name: 'National Institute of Technology', location: 'Chennai', }, 
    {serial: 2, name: 'National Institute of Technology', location: 'Allahabad', }, 
    {serial: 3, name: 'National Institute of Technology', location: 'Bhopal', }, 
    {serial: 4, name: 'National Institute of Technology', location: 'Jalandhar', }, 
    {serial: 5, name: 'Indraprastha Institute of Information Technology', location: 'Delhi', },
]

export default function ConsortiumPartnersPage() {
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
                    {/* <ListGroup.Item action variant="success" href="#link1">
                        <Row>
                            <Container className="col-8 align-self-center">National Instite of Technology, Delhi</Container>
                            <Button className="col-2"> Admission Creteria </Button>
                            <Button className="col-2" > Consortium Partners </Button>
                        </Row>
                    </ListGroup.Item> */}

                    {institutes.map((institute) => 
                        <InstituteListItem name={institute.name} location={institute.location} key={institute.serial} value={institute.serial} />
                    )}
                </ListGroup>
            <Row>
                
            </Row>
        </Col>
    </Container>
  )
}
