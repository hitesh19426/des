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

export default function hc_warning() {
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
                <h2 class="mt-2 h2">Host Change</h2>
                <h6 class="mt-2 mb-2 warning h4">Warning</h6>
                <ul class="mt-4 mb-2 ">
                    <li> You have completed DSA form your current institute. However, host also require DSA. So you will have to repeat DSA from host institute. </li>
                    <li> You have done 8 online credits but host change only allows 4. So your 4 online credits will be nullified. </li>
                </ul>
                <div class="buttons d-flex flex-row justify-content-center">
                    <a href="/hc_final" class="btn btn-primary me-3"> Proceed </a>
                    <a href="/hc_institute" class="btn btn-primary me-3"> Back </a>
                </div>
            </div>
        </Box>
    </Box>
  )
}
