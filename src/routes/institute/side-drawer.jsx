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
              <ListItemText primary='IIIT Delhi' />
            </ListItemButton>
        </List>
        <Divider />
        <List>
            <ListItemButton component="a" href="/institute/profile">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
            <ListItemButton component="a" href="/institute/analysis">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Analysis' />
            </ListItemButton>
            <ListItemButton component="a" href="/institute/creterias">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Creterias' />
            </ListItemButton>
            <ListItemButton component="a" href="/institute/students">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Students' />
            </ListItemButton>
            <ListItemButton component="a" href="/institute/faculty">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Faculty' />
            </ListItemButton>
            <ListItemButton component="a" href="/institute/courses">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary='Courses' />
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