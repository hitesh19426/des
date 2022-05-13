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
            <div class="row">
                <div class="accordion mt-5" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <a href="#" id="submit" class="btn btn-primary">Fetch Courses</a>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                    <li>
                                        Digital Circuits - MSIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Select course
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        Database Management System - DTU-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Select course
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        Big Data Analytics - IIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Select course
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        Blockchain and Cryptocurrency - NSIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Select course
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        Big Data Mining - IIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Select course
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        Cryptocurrency and Cybersecurity - NSIT-D
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Select course
                                            </label>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/savedCourses" id="submit" class="btn btn-primary">Save Courses</a>
            </div>
        </Box>
    </Box>
  )
}
