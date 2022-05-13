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

export default function hc_table3() {
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
                <h2 class="text-center mt-2 h2">Degree</h2>
                <h6 class="text-center h5">Indian Institute of Technology, Delhi</h6>
                <table class="table table-borderless mt-3">
                    <thead>
                        <tr class="table-row">
                            <th scope="col">Requirement Name</th>
                            <th scope="col">Required</th>
                            <th scope="col">Fulfilled</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Minimum credits from host institute</td>
                            <td>160</td>
                            <td>154</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Minimum credits from current institute</td>
                            <td>100</td>
                            <td>102</td>
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
                            <td>IP, DSA, AP</td>
                            <td>IP, DSA, AP</td>
                            <td>_/</td>
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
                    <a href="/hc_institute" class="mb-5 me-3 btn btn-primary">Back</a>
                </div>
            </div>
        </Box>
    </Box>
  )
}
