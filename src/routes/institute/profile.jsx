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
import SideDrawer from './side-drawer'
import institute_pic from './../../images/homepic.png'

export default function InstitueHomePage() {
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
            <Grid container spacing={2} columns={16}>
                <Grid item xs={6}>
                    <Avatar alt="IIITD Pic" src={institute_pic} sx={{width: 200, height: 200}} />
                </Grid>
                <Grid item container xs={6}>
                    <Grid item>
                        <Typography variant="subtitle1" component="h1"> Indraprastha Institute of Technology Delhi </Typography>
                    </Grid>
                    <Grid item>
                        <Typography paragraph variant="caption" > Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) was created by an act of Delhi legislature empowering it to carry out R&D, conduct educational programs, and grant degrees. </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item container>
                            <Grid item xs={6}>
                                <Typography paragraph> State </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography paragraph> Delhi </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={6}>
                                <Typography paragraph> Location </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography paragraph> Okhla, Phase 3, Industrail Area </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={6}>
                                <Typography paragraph> Tier </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography paragraph> Premium Band </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={6}>
                                <Typography paragraph> Website </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography paragraph> www.iiitd.ac.in </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={6}>
                                <Typography paragraph> Consritum Partners </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid item container>
                                    <Typography paragraph> Delhi Technology University </Typography>
                                    <Typography paragraph> Punjab College of Enginerring </Typography>
                                    <Typography paragraph> Indian Institute of Technology, Delhi </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </Box>
    </Box>
  );
}