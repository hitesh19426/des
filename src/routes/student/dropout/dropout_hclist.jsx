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

export default function dropout_hclist() {
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
            <div class="row ">
                <h2 class="mt-2 text-center">Dropout</h2>
                <h6 class="mt-2 text-center">Your institute does not allow dropout.  However, you can apply for host change to a institute that allows it. Please click yes to proceed.</h6>
                <table class="table table-borderless mt-2">
                    <thead>
                        <tr class="table-row">
                            <th scope="col">Institute</th>
                            <th scope="col">Criteria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Delhi Technological University, Delhi</td>
                            <td><a href="#">Check</a></td>
                        </tr>
                        <tr>
                            <td>Indian Institute of Technology, Delhi</td>
                            <td><a href="/host_change">Check</a></td>
                        </tr>
                        <tr>
                            <td>Maharaja Surajmal Institute of Technology, Delhi</td>
                            <td><a href="#">Check</a></td>
                        </tr>
                        <tr>
                            <td>Jaypee Institute of Information Technology, Uttar Pradesh</td>
                            <td><a href="#">Check</a></td>
                        </tr>
                        <tr>
                            <td>Netaji Subhash University of Technology, Delhi</td>
                            <td><a href="#">Check</a></td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <a href="/degree2" class="mb-5 btn btn-primary">Back</a>
                </div>
            </div>
        </Box>
    </Box>
  )
}
