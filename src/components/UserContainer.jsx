import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserContainer = () => {
  return (
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <IconButton>
            <AccountCircleIcon sx={{color:'white', fontSize:30, marginRight:1}}/>
            <Button>Nguyen Thanh Trung</Button>
          </IconButton>
        </Toolbar>
  )
}

export default UserContainer