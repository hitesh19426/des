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
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import institute_pic from './../../images/homepic.png'

export default function InstitueCreteriasPage() {
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
            <Grid container spacing={2} columns={16} padding={5}>
                <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained">
                    <Button key="one" href="creterias/host-change-creteria" > Host Change Creteria </Button>
                    <Button key="two" href="creterias/admission-creteria"> Admission Creteria </Button>
                    <Button key="three" href="creterias/dropout-creteria"> Dropout Creteria </Button>
                    <Button key="three" href="creterias/degree-creteria"> Degree Creteria </Button>
                </ButtonGroup>
            </Grid>
        </Box>
    </Box>
  );
}
