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

export default function dropout2() {
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
                <h2 class="mt-2">Dropout</h2>
                <h6 class="mt-2">Your institute does not allow dropout. These are the options available to you.</h6>
                <div class="buttons d-flex flex-row justify-content-center">
                    <a href="/dropout_proceed" class="btn btn-primary me-3"> Proceed </a>
                    <a href="/dropout_hc" class="btn btn-primary me-3"> Host Change </a>
                    <a href="/dropout" class="btn btn-primary me-3"> Cancel </a>
                </div>
            </div>
        </Box>
    </Box>
  )
}
