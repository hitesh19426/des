import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideDrawer from './side-drawer'
import profile_pic from './hitesh.jpg'
import { Accordion, Row } from 'react-bootstrap';


export default function grades() {
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <List>
            <ListItemButton component="a" href="">
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText primary='Student' />
            </ListItemButton>
        </List>
    </AppBar>
    <SideDrawer />
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >
        <Row>
            <Accordion >
                <Accordion.Item eventKey="1">
                    <Accordion.Header id="headingOne"> Semester 1 </Accordion.Header>
                    <Accordion.Body id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Subject</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Intro to Programming</td>
                                    <td>MAIT Delhi</td>
                                    <td>10 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Linear Algebra</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Intro to Database</td>
                                    <td>NSIT Delhi</td>
                                    <td>9 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Digital Circuits</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Communication Skills</td>
                                    <td>DTU Delhi</td>
                                    <td>7 CGPA</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header id="headingTwo"> Semester 2 </Accordion.Header>
                    <Accordion.Body id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Subject</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Intro to Programming</td>
                                    <td>MAIT Delhi</td>
                                    <td>10 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Linear Algebra</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Intro to Database</td>
                                    <td>NSIT Delhi</td>
                                    <td>9 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Digital Circuits</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Communication Skills</td>
                                    <td>DTU Delhi</td>
                                    <td>7 CGPA</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header id="headingThree"> Semester 3 </Accordion.Header>
                    <Accordion.Body id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Subject</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Intro to Programming</td>
                                    <td>MAIT Delhi</td>
                                    <td>10 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Linear Algebra</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Intro to Database</td>
                                    <td>NSIT Delhi</td>
                                    <td>9 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Digital Circuits</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Communication Skills</td>
                                    <td>DTU Delhi</td>
                                    <td>7 CGPA</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header id="heading4"> Semester 4 </Accordion.Header>
                    <Accordion.Body id="collapse4" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Subject</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Intro to Programming</td>
                                    <td>MAIT Delhi</td>
                                    <td>10 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Linear Algebra</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Intro to Database</td>
                                    <td>NSIT Delhi</td>
                                    <td>9 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Digital Circuits</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Communication Skills</td>
                                    <td>DTU Delhi</td>
                                    <td>7 CGPA</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header id="heading5"> Semester 5 </Accordion.Header>
                    <Accordion.Body id="collapse5" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Subject</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Intro to Programming</td>
                                    <td>MAIT Delhi</td>
                                    <td>10 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Linear Algebra</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Intro to Database</td>
                                    <td>NSIT Delhi</td>
                                    <td>9 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Digital Circuits</td>
                                    <td>IIIT Delhi</td>
                                    <td>8 CGPA</td>
                                </tr>
                                <tr>
                                    <td>Communication Skills</td>
                                    <td>DTU Delhi</td>
                                    <td>7 CGPA</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </Row>
    </Box>
</Box>
  )
}
