import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function SideDrawer() {
  return (
    <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box',},}} variant="permanent" anchor="left" >
        <List>
            <ListItemButton component="a" href="#comp">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Student' />
            </ListItemButton>
        </List>
        <Divider />
        <List>
            <ListItemButton component="a" href="/dashboard">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItemButton>
            <ListItemButton component="a" href="/profile">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
            <ListItemButton component="a" href="/courselist">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Course List' />
            </ListItemButton>
            <ListItemButton component="a" href="/grades">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Grades' />
            </ListItemButton>
            <ListItemButton component="a" href="/consortiumInstitiute">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Consortium Institutes' />
            </ListItemButton>
            <ListItemButton component="a" href="/register">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Course Registration' />
            </ListItemButton>
            <ListItemButton component="a" href="/dropout">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Dropout' />
            </ListItemButton>
            <ListItemButton component="a" href="/degree">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Degree' />
            </ListItemButton>
            <ListItemButton component="a" href="/hc">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Host Change' />
            </ListItemButton>
        </List>
        <Divider />
        <List className="">
            <ListItemButton component="a" href="/">
              <ListItemIcon> <MailIcon /> </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
        </List>
      </Drawer>
  );
}