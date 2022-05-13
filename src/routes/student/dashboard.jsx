import React from 'react'
import calendar from './calendar.png'
import welcome from './welcome-back.png'


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
import institute_pic from './../../images/homepic.png'

export default function dashboard() {
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
                <div class="col-8 mt-4">
                    <img src={welcome} alt="" sx={{width: 120, height: 120, borderRadius: 0}} />
                    <div class="box">
                        <p>
                            Dear Hitesh, <br />
                            You have not taken addmission in any institute. <br />
                            Please <a href="/apply">apply</a> to make full use of the Desy portal
                        </p>
                    </div>
                </div>
                <div class="col-4 mt-4 d-flex justify-content-end sidebar">
                    <img src={calendar} alt="" />
                </div>
            </div>
        </Box>
    </Box>
  )
}
