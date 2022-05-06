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
                <div class="container">
                    <h1 class="text-center">Degree Award Criteria</h1>
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
                                <td>Stream</td>
                                <td>Computer Science Enginerring</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Minimum credits for degree</td>
                                <td>160</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Min credits from host institute</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Maximum credits of online courses</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Mandatory courses from host</td>
                                <td>DSA</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Others</td>
                                <td>No active backlogs</td>
                            </tr>
                        </tbody>
                    </table>

                    <a href="institute/creterias" class="btn btn-primary my-3">Homepage</a>

                </div>
            </Box>
        </Box>
    );
}
