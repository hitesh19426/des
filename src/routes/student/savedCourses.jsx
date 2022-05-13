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

export default function savedCourses() {
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
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header id="headingOne"> Saved Courses </Accordion.Header>
                        <Accordion.Body id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div >
                                <ul>
                                    <li>
                                        Digital Circuits <br />
                                        MSIT-D
                                    </li>
                                    <li>
                                        Database Management System <br />
                                        DTU-D
                                    </li>
                                    <li>
                                        Big Data Mining <br />
                                        IIT-D
                                    </li>
                                    <li>
                                        Cryptocurrency and Cybersecurity <br />
                                        NSIT-D
                                    </li>
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Box>
    </Box>
  )
}
