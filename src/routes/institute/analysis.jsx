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
import institute_pic from './../../images/homepic.png'
import bargraph from './../../images/bargraph.png'

export default function InstitueAnalysisPage() {
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
                        <Typography variant="h4" component="h1"> Statistics </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item container>
                            <Grid item> <PersonIcon /> </Grid>
                            <Grid item xs={3}> <Typography paragraph> Professor </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 89 </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph>  24 Dec 2021 </Typography> </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item> <PersonIcon /> </Grid>
                            <Grid item xs={3}> <Typography paragraph> Laboratory </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 15 </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph>  8 Feb 2021 </Typography> </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item> <PersonIcon /> </Grid>
                            <Grid item xs={3}> <Typography paragraph> Publications </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 15 </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph>  17 Aug 2021 </Typography> </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item > <PersonIcon /> </Grid>
                            <Grid item xs={3}> <Typography paragraph> Professor </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 2854 </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 20 Nov 2022 </Typography> </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item > <PersonIcon /> </Grid>
                            <Grid item xs={3}> <Typography paragraph> Courses </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 128 </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 12 June 2022 </Typography> </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item > <PersonIcon /> </Grid>
                            <Grid item xs={3}> <Typography paragraph> Partners </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 4 </Typography> </Grid>
                            <Grid item xs={4}> <Typography paragraph> 18 Feb 2021 </Typography> </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item >
                                <ImageList sx={{ width: '170%', height:'100%', padding: '30px 0px' }} >
                                    <ImageListItem >
                                        <img src={bargraph} alt='bar graph' loading="lazy" />
                                    </ImageListItem>
                                </ImageList>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} >
                    <Grid item>
                        <Avatar alt="IIITD Pic" src={institute_pic} sx={{width: 200, height: 200}} />
                    </Grid>
                    <Grid item container>
                        <Grid xs={6} > <Typography paragraph> View All </Typography> </Grid>
                        <Grid xs={6} > <Typography paragraph> View All </Typography> </Grid>
                    </Grid>
                    <Grid item>
                        <List>
                            <ListItemText primary="Name" secondary="IIIT Delhi" variant="primary"/>
                            <ListItemText primary="Address" secondary="Okhla" />
                            <ListItemText primary="Tier" secondary="Premium Band" />
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
}