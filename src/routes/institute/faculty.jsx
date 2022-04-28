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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SideDrawer from './side-drawer'
import PersonIcon from '@mui/icons-material/Person';
import stats from './../../images/prof_stats.png'
import { DataGrid } from '@mui/x-data-grid';


export default function InstitueFacultyPage() {
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
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3}} >
            <Grid container>
                <Grid item container xs={8}>
                    <Grid item container spacing={2}>
                        <Grid item container spacing={2} >
                            <Grid item xs={4}> <Typography variant="subtitle2"> Full Name </Typography> </Grid>
                            <Grid item xs={3}> <Typography variant="subtitle2"> Branch </Typography> </Grid>
                            <Grid item xs={2}> <Typography variant="subtitle2"> Courses </Typography> </Grid>
                            <Grid item xs={3}> <Typography variant="subtitle2"> Position </Typography> </Grid>
                        </Grid>
                        {rows.map((row) => (
                            <Grid item container spacing={2}>
                                <Grid item xs={4}> <Typography variant="body2"> {row.name} </Typography> </Grid>
                                <Grid item xs={3}> <Typography variant="body2"> {row.branch} </Typography> </Grid>
                                <Grid item xs={2}> <Typography variant="body2"> {row.courses} </Typography> </Grid>
                                <Grid item xs={3}> <Typography variant="body2"> {row.position} </Typography> </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item container xs={4} >
                    <ImageListItem > <img src={stats} alt='stats' loading="lazy" /> </ImageListItem>
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
}

const rows = [
    { name: 'Rajendra Sharma', courses: 7, branch: 'Computers', position: 'Visiting' },
    { name: 'Nitish Verma', courses: 3, branch: 'Electronics', position: 'Assissant' },
    { name: 'Anuj Garg', courses: 4, branch: 'Design', position: 'Associate' },
    { name: 'Richa Gupta', courses: 4, branch: 'Electrical', position: 'VC' },
    { name: 'Aman Parnami', courses: 4, branch: 'Mechanics', position: 'Dean' },
    { name: 'Anoop Ratn', courses: 4, branch: 'Electronics', position: 'Associate' },
    { name: 'Vibha Verma', courses: 4, branch: 'Design', position: 'Associate' },
    { name: 'Gursimran Verma', courses: 4, branch: 'Design', position: 'Associate' },
    { name: 'Tushar Malhotra', courses: 4, branch: 'Electrical', position: 'Assissant' },
    { name: 'Hitesh Menan', courses: 4, branch: 'Mechanics', position: 'Assissant' },
    { name: 'Hitesh Garg',courses: 4, branch: 'Design', position: 'Assissant' },
    { name: 'Saurabh Malhotra', courses: 4, branch: 'Electronics', position: 'Visiting' },
    { name: 'Chander Mohan', courses: 4, branch: 'Electronics', position: 'Visiting' },
    { name: 'Manish Verma', courses: 4, branch: 'Computers', position: 'Visiting' },
];
