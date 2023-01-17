import React, { Component } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function AddGameButton({addNewGame}) {
    const [open, setOpen] = React.useState(false);

    const [inputHome, setInputHome] = React.useState('');
    const [inputAway, setInputAway] = React.useState('');
    const handleInputHomeChange = (event) => {
        setInputHome(event.target.value);
    }

    const handleInputAwayChange = (event) => {
        setInputAway(event.target.value);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    const submitGame = ()=>{
        setOpen(false);
        addNewGame(inputHome,inputAway);
    }

    return (
        <>
            <Fab onClick={handleClickOpen}  variant="extended" color="secondary" aria-label="add" 
                style={{'margin': '20px 0'}}>
                <AddIcon sx={{ mr: 1 }} />
                Add New Game
            </Fab>
            <Divider variant="middle" />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new game</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="homeTeam"
                        label="Home team"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onChange={handleInputHomeChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="awayTeam"
                        label="Away team"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                        onChange={handleInputAwayChange}
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={submitGame}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
  }
  
export default AddGameButton;
