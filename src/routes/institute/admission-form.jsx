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
                        <h1 class="text-center">Admission Criteria</h1>
                        <form>
                            <div class="mb-3">
                                <label for="" class="form-label">Program name</label>
                                <input type="text" value="Mechanical" class="form-control" id="" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Maximum Seats</label>
                                <input type="text" value="" class="form-control" id="" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Minimum Age</label>
                                <input type="text" class="form-control" id="" />
                            </div>

                            <div class="mb-3">
                                <label for="" class="form-label">Minimum Class 10 CBSE Boards Percentage</label>
                                <input type="text" class="form-control" id="" />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Minimum Class 12 CBSE Boards Percentage</label>
                                <input type="text" class="form-control" id="" />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">JEE Mains Rank</label>
                                <input type="text" class="form-control" id="" />
                            </div>

                            <a href="/admissionMEthanks" class="btn btn-primary my-3">Submit</a>
                        </form>
                    </div>
                </Grid>
                </Box>
        </Box>
    );
}
