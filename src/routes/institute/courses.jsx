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
import stats from './../../images/courses_stats.png'

export default function InstitueCoursesPage() {
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
                        <Grid item container  >
                            <Grid item xs={4}> <Typography variant="subtitle2"> Course Name </Typography> </Grid>
                            <Grid item xs={3}> <Typography variant="subtitle2"> Stream </Typography> </Grid>
                            <Grid item xs={2}> <Typography variant="subtitle2"> Credits </Typography> </Grid>
                            <Grid item xs={3}> <Typography variant="subtitle2"> Professor </Typography> </Grid>
                        </Grid>
                        {rows.map((row) => (
                            <Grid item container >
                                <Grid item xs={4}> <Typography variant="body2"> {row.position} </Typography> </Grid>
                                <Grid item xs={3}> <Typography variant="body2"> {row.branch} </Typography> </Grid>
                                <Grid item xs={2}> <Typography variant="body2"> {row.credits} </Typography> </Grid>
                                <Grid item xs={3}> <Typography variant="body2"> {row.name} </Typography> </Grid>
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
    { name: 'Rajendra Sharma', credits: 2, branch: 'Computers', position: 'Motion' },
    { name: 'Nitish Verma', credits: 2, branch: 'Electronics', position: 'Blockchain ' },
    { name: 'Anuj Garg', credits: 4, branch: 'Design', position: 'Animation' },
    { name: 'Richa Gupta', credits: 4, branch: 'Electrical', position: 'Networking' },
    { name: 'Aman Parnami', credits: 1, branch: 'Mechanics', position: 'Socialogy' },
    { name: 'Anoop Ratn', credits: 1, branch: 'Electronics', position: 'Databases' },
    { name: 'Vibha Verma', credits: 4, branch: 'Design', position: 'Data Structure' },
    { name: 'Gursimran Verma', credits: 8, branch: 'Design', position: 'Programming' },
    { name: 'Tushar Malhotra', credits: 4, branch: 'Electrical', position: 'Cryptography' },
    { name: 'Hitesh Menan', credits: 8, branch: 'Mechanics', position: 'Web Dev' },
    { name: 'Hitesh Garg',credits: 2, branch: 'Design', position: 'App Dev' },
    { name: 'Saurabh Malhotra', credits: 4, branch: 'Electronics', position: 'Digital Circuits' },
    { name: 'Chander Mohan', credits: 1, branch: 'Electronics', position: 'Computers' },
    { name: 'Manish Verma', credits: 4, branch: 'Computers', position: 'NFT & Web3' },
];
  