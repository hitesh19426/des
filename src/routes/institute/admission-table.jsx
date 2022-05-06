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
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Program</td>
                                    <td>B.Tech</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Stream</td>
                                    <td>Mechanical Enginerring</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Maximum Seats</td>
                                    <td>254</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Minimum Age</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Minimum Class 10 CBSE Boards Percentage</td>
                                    <td>98.0%</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Minimum Class 12 CBSE Boards Percentage</td>
                                    <td>95.6%</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Minimum JEE Mains Rank</td>
                                    <td>1,200</td>
                                </tr>
                            </tbody>
                        </table>

                        <a href="/institute/creterias" class="btn btn-primary my-3">Homepage</a>

                    </div>
                </Grid>
            </Box>
        </Box>
    );
}
