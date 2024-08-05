import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import TopNav from './navbar/TopNav';
import SideNav from './navbar/SideNav';
import { Outlet } from 'react-router-dom';

const drawerWidth = 70;

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        variant='none'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'var(--sol-blue)',
          color: 'var(--sol-crm)',
        }}
      >
        <Toolbar>
          <TopNav />
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            textAlign: 'center',
            background: 'var(--sol-blue)',
            color: 'var(--li-crm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignContent: 'center',
            height: '100%',
          },
        }}
      >
        <Toolbar disableGutters />
        <SideNav />
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 2, width: '100%' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
