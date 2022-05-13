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

export default function degree2() {
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
            <div class="row text-center">
                <h2 class="mt-5">Degree</h2>
                <h6 class="mt-5">Do you want to see your degree status with your current host?</h6>
                <h6 class="">Do you want to see your degree status with different host?</h6>
                <h6 class="mb-5">Please select the required option</h6>
                <div class="buttons d-flex flex-row justify-content-center">
                    <a href="/degree3" class="btn btn-primary">Current</a>
                    <a href="/degree4" class="btn btn-primary">Host Change</a>
                    <a href="/degree" class="btn btn-primary">Cancel</a>
                </div>
            </div>
        </Box>
    </Box>
  )
}
