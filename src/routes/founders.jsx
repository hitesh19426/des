import React from 'react'
import {Row, Col, Container, Figure, Table} from 'react-bootstrap'
import hiteshpic from './../images/team/hitesh.png'
import mukeshpic from './../images/team/mukesh.png'
import piyushpic from './../images/team/piyush.jpg'
import placeholderfemalepic from './../images/team/placeholderfemale.jpg'
import placeholdermalepic from './../images/team/placeholdermale.jpg'
import prathampic from './../images/team/pratham.png'

export default function FoundersPage() {
    return (
        <Container className="team" id="team">
            <Col>
                <Row className="mt-5"> <h1> Founders </h1> </Row>
                <Row> <p> Meet the wonderful minds behind this project! </p> </Row>
                {/* TODO:  Add image css in separate file */}
                <Row>
                    <Col className="col6 col-md-3">
                        <Figure style={figureStyle}>
                            <Figure.Image width="100%" alt="mukesh pic" src={mukeshpic} className="p-3" />
                            <Figure.Caption className="text-center"><strong> Dr. Mukesh Mohania </strong></Figure.Caption>
                            <Figure.Caption className="text-center"> Principal Researcher </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col className="col6 col-md-3">
                        <Figure style={figureStyle}>
                            <Figure.Image width="100%" alt="mukesh pic" src={placeholdermalepic} className="p-3" />
                            <Figure.Caption className="text-center"><strong> Dr. Anuj Garg </strong></Figure.Caption>
                            <Figure.Caption className="text-center"> Principal Researcher </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col className="col6 col-md-3">
                        <Figure style={figureStyle}>
                            <Figure.Image width="100%" alt="mukesh pic" src={prathampic} className="p-3" />
                            <Figure.Caption className="text-center"><strong> Pratham Gupta </strong></Figure.Caption>
                            <Figure.Caption className="text-center"> Blockchain Developer </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col className="col6 col-md-3">
                        <Figure style={figureStyle}>
                            <Figure.Image width="100%" alt="mukesh pic" src={placeholdermalepic} className="p-3" />
                            <Figure.Caption className="text-center"><strong> Sourabh Yadav Das </strong></Figure.Caption>
                            <Figure.Caption className="text-center"> Blockchain Developer </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col className="col6 col-md-3">
                        <Figure style={figureStyle}>
                            <Figure.Image width="100%" alt="mukesh pic" src={piyushpic} className="p-3" />
                            <Figure.Caption className="text-center"><strong> Piyush Sharma </strong></Figure.Caption>
                            <Figure.Caption className="text-center"> Frontend Developer </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col className="col6 col-md-3">
                        <Figure style={figureStyle}>
                            <Figure.Image width="100%" alt="mukesh pic" src={hiteshpic} className="p-3" />
                            <Figure.Caption className="text-center"><strong> Frontend Developer </strong></Figure.Caption>
                            <Figure.Caption className="text-center"> Frontend Developer </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col className="col6 col-md-3">
                        <Figure style={figureStyle}>
                            <Figure.Image width="100%" alt="mukesh pic" src={placeholderfemalepic} className="p-3" />
                            <Figure.Caption className="text-center"><strong> Gursimran Kaur </strong></Figure.Caption>
                            <Figure.Caption className="text-center"> PUndergraduate Researcher </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>

                <Table class="table my-5 table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Piyush Sharma</td>
                            <td>Frontend Developer</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Hitesh Garg</td>
                            <td>Frontend Developer</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Gursimran Kaur</td>
                            <td>Undergraduate Researcher</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Container>
    )
}

const figureStyle = {
    backgroundColor: '#F6F6FF',
    /* border: 1px solid red; */
    margin: '10px 0px',
    borderRadius: '10px',
}
