import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function TopBar() {
  return (
      <AppBar position="static" color='default' style={{ background: '#264072' }}>
        <Toolbar variant="dense" >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Button color="info">Sign In</Button>
          <Button color="warning">Sign Up</Button>
        </Toolbar>
      </AppBar>
  );
}
