import React from 'react'
import {Row, Container, Col, Nav, Card} from 'react-bootstrap'
import ComputerIcon from '@mui/icons-material/Computer';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PsychologyIcon from '@mui/icons-material/Psychology';


function CourseCard(props){
    return (
        <Card style={{ height: '100%'}} className = 'text-center mb-2'>
            <Card.Body style={{ 'backgroundColor':'#F6F6FF'}} >
                <Container style={{height: '70px'}}>
                    {props.icon}
                </Container>
                <Row>
                    <Card.Title className="text-center"> {props.title} </Card.Title>
                </Row>
                <Card.Text className="pb-2">
                    <b> {props.count} institutes </b>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

function ClickableCard(props){
    return (
        <Nav.Link href="courses/institute" style={{'textDecoration': 'none', color:'black'}} >
            <CourseCard icon={props.icon} count={props.count} title={props.title} ></CourseCard>
        </Nav.Link>
    )
}

const courses = [
    {title: 'CSE', count: 12, icon: <ComputerIcon sx={{fontSize:50}} />}, 
    {title: 'Electrical', count: 23, icon: <ElectricalServicesIcon sx={{fontSize:50}} />},
    {title: 'Electronics', count: 24, icon: <ElectricalServicesIcon sx={{fontSize:50}} />},
    {title: 'Design', count: 25, icon: <DesignServicesIcon sx={{fontSize:50}} />},
    {title: 'Finance', count: 26, icon: <AccountBalanceIcon sx={{fontSize:50}} />},
    {title: 'Business', count: 27, icon: <DesignServicesIcon sx={{fontSize:50}} />},
    {title: 'Social Science', count: 29, icon: <PsychologyIcon sx={{fontSize:50}} />},
    {title: 'Arts', count: 30, icon: <ComputerIcon sx={{fontSize:50}} />}
]

export default function CoursesPage() {

    return (
        <Container>
            <Col>
                <Row className="mt-5 mb-5">
                    <Col>
                        <Row> <h1> Courses </h1> </Row>
                        <Row> <h6> We offer degress in varied discipline across colleges in India </h6> </Row> 
                    </Col>
                    <Col className="col-3 align-self-end mr-0">
                        <Nav.Link href="#browse_all"> Browse All </Nav.Link>
                    </Col>
                </Row>
                <Row xs={1} md={4} className="g-4 ml-1">
                    {courses.map((course) => (
                        <Col className="">
                            <ClickableCard icon={course.icon} count={course.count} title={course.title} />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Container>
    )
}