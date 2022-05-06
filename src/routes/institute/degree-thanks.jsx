import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SideDrawer from './side-drawer'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import institute_pic from './../../images/homepic.png'

export default function HostChangeCreteriaPage() { 
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <List>
                    <ListItemButton component="a" href="">
                    <ListItemIcon> <InboxIcon /> </ListItemIcon>
                    <ListItemText primary='IIIT Delhi' />
                    </ListItemButton>
                </List>
            </AppBar>
            <SideDrawer />
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >
                <Grid item container >
                    <div class="container"> 
                        <h1 class="text-center">Degree Criteria</h1>

                        <p>
                            The criteria has been updated.
                            <br />
                            Thank you for your request
                        </p>

                        <a href="/degreeTable" class="btn btn-primary my-3">View</a>

                    </div>
                </Grid>
            </Box>
        </Box>
    );
}
