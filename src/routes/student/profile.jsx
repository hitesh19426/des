import React from 'react'
import profileimage from './hitesh.jpg'

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


export default function profile() {
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
                <div class="col-4">
                    <img src={profileimage} alt="" width="100%" />
                </div>
                <div class="col-8">
                    <h1>Hitesh Garg</h1>
                    <p>
                        Hi, I am Hitesh Garg. I am a third year undergrad at IIITD. I like a lot of things, but I dont
                        end up doing any of them. I am currently trying to fill this description box so I need to write
                        one more line. I hope I am doing a good job in this. I am the best.
                    </p>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Key</th>
                                <th scope="col">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Hitesh Garg</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Father</td>
                                <td>B.K. Garg</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>11 November 2000</td>
                            </tr>
                            <tr>
                                <td>Branch</td>
                                <td>Computer Science and Bioscience</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>hiteshgarg@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Admission Date</td>
                                <td>15 July 2019</td>
                            </tr>
                            <tr>
                                <td>Roll Number</td>
                                <td>2019382</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>9876543210</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Box>
    </Box>
  )
}
