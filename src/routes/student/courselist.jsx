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

export default function courselist() {
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
                <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header id="headingOne"> Semester 1 </Accordion.Header>
                        <Accordion.Body id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <ul>
                                <li>Intro to Programming - IIIT Delhi</li>
                                <li>Linear Algerbra - NIT Delhi</li>
                                <li>Digital Circuits - IIIT Delhi</li>
                                <li>Prototyping Interactive Systems - DTU Delhi</li>
                                <li>Communication Skills - IIIT Delhi</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header id="headingTwo"> Semester 2 </Accordion.Header>
                        <Accordion.Body id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <ul>
                                <li>Intro to Programming - IIIT Delhi</li>
                                <li>Linear Algerbra - NIT Delhi</li>
                                <li>Digital Circuits - IIIT Delhi</li>
                                <li>Prototyping Interactive Systems - DTU Delhi</li>
                                <li>Communication Skills - IIIT Delhi</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header id="headingThree"> Semester 3 </Accordion.Header>
                        <Accordion.Body id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <ul>
                                <li>Intro to Programming - IIIT Delhi</li>
                                <li>Linear Algerbra - NIT Delhi</li>
                                <li>Digital Circuits - IIIT Delhi</li>
                                <li>Prototyping Interactive Systems - DTU Delhi</li>
                                <li>Communication Skills - IIIT Delhi</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header id="heading4"> Semester 4 </Accordion.Header>
                        <Accordion.Body id="collapse4" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                            <ul>
                                <li>Intro to Programming - IIIT Delhi</li>
                                <li>Linear Algerbra - NIT Delhi</li>
                                <li>Digital Circuits - IIIT Delhi</li>
                                <li>Prototyping Interactive Systems - DTU Delhi</li>
                                <li>Communication Skills - IIIT Delhi</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header id="heading5"> Semester 5 </Accordion.Header>
                        <Accordion.Body id="collapse5" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                            <ul>
                                <li>Intro to Programming - IIIT Delhi</li>
                                <li>Linear Algerbra - NIT Delhi</li>
                                <li>Digital Circuits - IIIT Delhi</li>
                                <li>Prototyping Interactive Systems - DTU Delhi</li>
                                <li>Communication Skills - IIIT Delhi</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header id="heading6"> Semester 6 </Accordion.Header>
                        <Accordion.Body id="collapse6" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                            <ul>
                                <li>Intro to Programming - IIIT Delhi</li>
                                <li>Linear Algerbra - NIT Delhi</li>
                                <li>Digital Circuits - IIIT Delhi</li>
                                <li>Prototyping Interactive Systems - DTU Delhi</li>
                                <li>Communication Skills - IIIT Delhi</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header id="heading7"> Semester 7 </Accordion.Header>
                        <Accordion.Body id="collapse7" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                            <ul>
                                <li>Intro to Programming - IIIT Delhi</li>
                                <li>Linear Algerbra - NIT Delhi</li>
                                <li>Digital Circuits - IIIT Delhi</li>
                                <li>Prototyping Interactive Systems - DTU Delhi</li>
                                <li>Communication Skills - IIIT Delhi</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header > Semester 8 </Accordion.Header>
                        <Accordion.Body id="collapse8" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                            <ul>
                                <li>Intro to Programming - IIIT Delhi</li>
                                <li>Linear Algerbra - NIT Delhi</li>
                                <li>Digital Circuits - IIIT Delhi</li>
                                <li>Prototyping Interactive Systems - DTU Delhi</li>
                                <li>Communication Skills - IIIT Delhi</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Row>
        </Box>
    </Box>
    )
}
