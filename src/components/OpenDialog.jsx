import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Add } from '@mui/icons-material'
import styled from 'styled-components'

const OpenDialog = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} endIcon={<Add />}>Add</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your information
          </DialogContentText>
          <Row>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="email"
                fullWidth
                variant="standard"
                sx={{margin:2}}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Age"
                type="email"
                fullWidth
                variant="standard"
                sx={{margin:2}}
            />
          </Row>
          <Row>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Address"
                type="email"
                fullWidth
                variant="standard"
                sx={{margin:2}}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Company"
                type="email"
                fullWidth
                variant="standard"
                sx={{margin:2}}
            />
          </Row>
          <Row>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                sx={{margin:2}}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                sx={{margin:2}}
            />
          </Row>
          <Row>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                sx={{margin:2}}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                sx={{margin:2}}
            />
          </Row>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
export default OpenDialog