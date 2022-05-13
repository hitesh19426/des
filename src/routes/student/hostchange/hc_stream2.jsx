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
import SideDrawer from './../side-drawer'
import { Accordion, Col, Row, Button } from 'react-bootstrap';

export default function hc_stream() {
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
                                <nav class="nav flex-column">
                                    <a href="#"  class="nav-link active" aria-current="page"> Electonics </a>
                                    <a href="/hc_table6" class="nav-link"> Computer Science </a>
                                    <a href="#" class="nav-link"> Electrical  </a>
                                    <a href="#" class="nav-link"> Mechanical </a>
                                </nav>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Row className="align-self-center">
                    <Button href="/hc_institute" className="mt-3" id="submit"> Back </Button>
                </Row>
            </Col>
        </Box>
    </Box>
  )
}
