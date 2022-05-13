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

export default function consortiumInstitiute() {
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
                        <Accordion.Header id="headingOne">
                            National Institute of Technology, Delhi (NIT-D)
                        </Accordion.Header>
                        <Accordion.Body id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <ul>
                                <li><a href="">View criteria for host change</a></li>
                                <li><a href="">View criteria for drop out</a></li>
                                <li><a href="">View criteria for degree </a></li>
                                <li><a href="">View courses</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header id="headingTwo">
                            Indian Institute of Technology, Delhi (IIT-D)
                        </Accordion.Header>
                        <Accordion.Body id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <ul>
                                <li><a href="">View criteria for host change</a></li>
                                <li><a href="">View criteria for drop out</a></li>
                                <li><a href="">View criteria for degree </a></li>
                                <li><a href="">View courses</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header id="headingThree">
                            Maharaja Surajmal Institute of Technology, Delhi (MSIT-D)
                        </Accordion.Header>
                        <Accordion.Body id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <ul>
                                <li><a href="">View criteria for host change</a></li>
                                <li><a href="">View criteria for drop out</a></li>
                                <li><a href="">View criteria for degree </a></li>
                                <li><a href="">View courses</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header id="heading4">
                            Indraprastha Institute of Information Technology, Delhi (IIIT-D)
                        </Accordion.Header>
                        <Accordion.Body id="collapse4" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                            <ul>
                                <li><a href="">View criteria for host change</a></li>
                                <li><a href="">View criteria for drop out</a></li>
                                <li><a href="">View criteria for degree </a></li>
                                <li><a href="">View courses</a></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Row>
        </Box>
    </Box>
  )
}
