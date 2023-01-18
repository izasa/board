
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function Modal({ onSubmit, homeLabel, awayLabel, homeInput, awayInput, index, inputType, operation }) {
    const [open, setOpen] = useState(false);

    const [updatedHomeInput, setHomeValue] = useState('');
    const [updatedAwayInput, setAwayValue] = useState('');

    const handleInputHomeValue = (event) => {
        setHomeValue(event.target.value);
    }

    const handleInputAwayValue = (event) => {
        setAwayValue(event.target.value);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnSubmit = () => {
        setOpen(false);
        onSubmit(
            updatedHomeInput,
            updatedAwayInput,
            index,
        );
    }

    return (
        <>
            <Button data-cy={operation} onClick={handleClickOpen} variant="outlined" > {operation} game</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{operation} game</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="homeTeam"
                        label={homeLabel}
                        defaultValue={homeInput}
                        type={inputType}
                        fullWidth
                        onChange={handleInputHomeValue}
                    />
                    <TextField
                        margin="dense"
                        id="awayTeam"
                        label={awayLabel}
                        type={inputType}
                        fullWidth
                        defaultValue={awayInput}
                        onChange={handleInputAwayValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button data-cy="submit" onClick={handleOnSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Modal;
