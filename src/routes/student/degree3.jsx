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

export default function degree3() {
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
                <h2 class="text-center mt-1">Degree</h2>
                <table class="table table-borderless mt-1">
                    <thead>
                        <tr class="table-row">
                            <th scope="col">Field Name</th>
                            <th scope="col">Required</th>
                            <th scope="col">Fulfilled</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Minimum credits for degree</td>
                            <td>160</td>
                            <td>140</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Minimum credits from host</td>
                            <td>100</td>
                            <td>110</td>
                            <td>_/</td>
                        </tr>
                        <tr>
                            <td>Maximum online credits</td>
                            <td>20</td>
                            <td>16</td>
                            <td>_/</td>
                        </tr>
                        <tr>
                            <td>Mandatory host courses</td>
                            <td>IP, DSA, AP, ADA</td>
                            <td>IP, DSA, AP</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Others</td>
                            <td>0 active backlogs</td>
                            <td>0 active backlogs</td>
                            <td>_/</td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <p class="mt-4">You have not fulfilled the degree criteria for your host institute</p>
                    <a href="/degree2" class="mb-2 btn btn-primary">Back</a>
                </div>
            </div>
        </Box>
    </Box>
  )
}
