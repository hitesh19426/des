import * as React from 'react';
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


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import SideDrawer from './side-drawer'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import institute_pic from './../../images/homepic.png'

export default function DegreeCreteriaPage() {
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
            <Grid container spacing={2}>
                <Grid item container spacing={3} xs={8}>
                    <Grid item >
                        <Typography variant="h4" component="h1"> Degree Creteria </Typography>
                    </Grid>
                    <Grid>
                        <FormControl variant="filled" sx={{ mt: 3, minWidth: 420 }}>
                            <InputLabel id="demo-simple-select-filled-label"> Stream </InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={"Program"}> --- </MenuItem>
                                <MenuItem value={"I"}> Computer Science </MenuItem>
                                <MenuItem value={"II"}> Information Technology </MenuItem>
                                <MenuItem value={"III"}> Electrical and Electronics </MenuItem>
                                <MenuItem value={"IV"}> Mechanical </MenuItem>
                                <MenuItem value={"V"}> Civil </MenuItem>
                                <MenuItem value={"VI"}> Biotechnology </MenuItem>
                            </Select>
                        </FormControl>

                        <Button variant="contained" href="degree-creteria/degree-form" sx={{ mt: 3}} > Submit </Button>
                    </Grid>
                </Grid>
                <Grid item xs={4} >
                
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
}
