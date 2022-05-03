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
import TextField from '@mui/material/TextField';

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
                <Grid item container spacing={3} xs={8}>
                    <Grid item>
                        <Typography variant="h4" component="h1"> Host Change Form </Typography>
                    </Grid>
                    <Grid item sx={{minWidth: 440}} >
                        <TextField id="outlined-basic" fullWidth label="Program name" variant="outlined" />
                    </Grid>
                    <Grid item sx={{minWidth: 440}} >
                        <TextField id="outlined-basic" fullWidth label="Stream name" variant="outlined" />
                    </Grid>
                    <Grid item sx={{minWidth: 440}} >
                        <TextField id="outlined-basic" fullWidth label="Semester" variant="outlined" />
                    </Grid>
                    <Grid item sx={{minWidth: 440}} >
                        <TextField id="outlined-basic" fullWidth label="Minimum credits from current host institute" variant="outlined" />
                    </Grid>
                    <Grid item sx={{minWidth: 440}} >
                        <TextField id="outlined-basic" fullWidth label="Maximum credits from online courses" variant="outlined" />
                    </Grid>
                    <Grid item sx={{minWidth: 440}} >
                        <TextField id="outlined-basic" fullWidth label="Minimum cumulative grade point" variant="outlined" />
                    </Grid>
                    <Grid item sx={{minWidth: 440}} >
                        <TextField id="outlined-basic" fullWidth label="Allowed streams" variant="outlined" />
                    </Grid>
                    <Grid item sx={{minWidth: 440}} >
                        <TextField id="outlined-basic" fullWidth label="Mandatory courses" variant="outlined" />
                    </Grid>
                    <Grid item container sx={{minWidth: 440}} >
                        <Button variant="contained" href="#" > Submit </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
