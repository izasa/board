import React, { Component, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import {useRef} from 'react';

function UpdateGame({updateGame, index, homeName, awayName, homeScore, awayScore}) {
    const [open, setOpen] = React.useState(false);

    const [updatedHomeScore, setHomeScore] = React.useState('');
    const [updatedAwayScore, setAwayScore] = React.useState('');
    const handleInputHomeScore = (event) => {
        setHomeScore(event.target.value);
    }

    const handleInputAwayScore = (event) => {
        setAwayScore(event.target.value);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitGame = ()=>{
        setOpen(false);
        updateGame(index, updatedHomeScore, updatedAwayScore);
    }

    return (
        <>
        <Button onClick={handleClickOpen} variant="outlined" > Update</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update game</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="homeTeam"
                        label={homeName}
                        defaultValue={homeScore}
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleInputHomeScore}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="awayTeam"
                        label="Away team"
                        type="number"
                        fullWidth
                        defaultValue={awayScore}
                        variant="standard"
                        onChange={handleInputAwayScore}
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
  
export default UpdateGame;
