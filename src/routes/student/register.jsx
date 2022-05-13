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
import { Accordion, Row, Button, Col } from 'react-bootstrap';

export default function register() {
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
            <Col>
                <Accordion as="Row" id="accordionExample">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header id="headingOne"> Fetch Courses </Accordion.Header>
                        <Accordion.Body id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div>
                                <ul>
                                    <li>
                                        Digital Circuits - MSIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault"> Select course </label>
                                        </div>
                                    </li>

                                    <li>
                                        Database Management System - DTU-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault"> Select course </label>
                                        </div>
                                    </li>

                                    <li>
                                        Big Data Analytics - IIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault"> Select course </label>
                                        </div>
                                    </li>

                                    <li>
                                        Blockchain and Cryptocurrency - NSIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault"> Select course </label>
                                        </div>
                                    </li>

                                    <li>
                                        Big Data Mining - IIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault"> Select course </label>
                                        </div>
                                    </li>

                                    <li>
                                        Cryptocurrency and Cybersecurity - NSIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault"> Select course
                                            </label>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Row className="align-self-center">
                    <Button href="/savedCourses" className="mt-3" id="submit"> Save Courses </Button>
                </Row>
            </Col>
        </Box>
    </Box>
  )
}
