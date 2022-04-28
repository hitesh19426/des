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
import stats from './../../images/students_stats.png'
import { DataGrid } from '@mui/x-data-grid';

export default function InstitueStudentsPage() {
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
                            <Grid item xs={2}> <Typography variant="subtitle2"> Roll No </Typography> </Grid>
                            <Grid item xs={3}> <Typography variant="subtitle2"> Branch </Typography> </Grid>
                            <Grid item xs={3}> <Typography variant="subtitle2"> Program </Typography> </Grid>
                        </Grid>
                        {rows.map((row) => (
                            <Grid item container spacing={2}>
                                <Grid item xs={4}> <Typography variant="body2"> {row.name} </Typography> </Grid>
                                <Grid item xs={2}> <Typography variant="body2"> {row.rollno} </Typography> </Grid>
                                <Grid item xs={3}> <Typography variant="body2"> {row.branch} </Typography> </Grid>
                                <Grid item xs={3}> <Typography variant="body2"> {row.program} </Typography> </Grid>
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
    { name: 'Abhishek Verma', rollno: '2019358', branch: 'Computers', program: 'BTech' },
    { name: 'Chander Menan', rollno: '2018731', branch: 'Electronics', program: 'MTech' },
    { name: 'Raghav Pal', rollno: '2021912', branch: 'Design', program: 'BTech' },
    { name: 'Tushar Malhotra', rollno: '2019423', branch: 'Electrical', program: 'MTech' },
    { name: 'Piyush Sharma', rollno: '2020121', branch: 'Mechanics', program: 'MTech' },
    { name: 'Chander Menan', rollno: '2018212', branch: 'Electronics', program: 'PHD' },
    { name: 'Raghav Pal', rollno: '2019212', branch: 'Design', program: 'BTech' },
    { name: 'Gursimran Verma', rollno: '2019314', branch: 'Design', program: 'BTech' },
    { name: 'Ankit Yadav', rollno: '2019352', branch: 'Electrical', program: 'MTech' },
    { name: 'Pratham Gupta', rollno: '2019281', branch: 'Mechanics', program: 'MTech' },
    { name: 'Hitesh Garg', rollno: '20190182', branch: 'Design', program: 'MTech' },
    { name: 'Saurabh Malhotra', rollno: '2019281', branch: 'Electronics', program: 'PHD' },
    { name: 'Chander Mohan', rollno: '2019218', branch: 'Electronics', program: 'BTech' },
    { name: 'Manish Verma', rollno: '2019371', branch: 'Computers', program: 'BTech' },
];
  
  