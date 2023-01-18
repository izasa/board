import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '../Modal/Modal';

function ScoreTable({board, updateGameModal, removeGame }) {
    return (
        <TableContainer component={Paper} style={{
            'maxWidth': '1000px',
            marginRight: 'auto',
            marginLeft: 'auto'
        }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>Home Town</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Away Team</TableCell>
                        <TableCell align="right">Update game</TableCell>
                        <TableCell align="right">Finish game</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {board.map((row, index) => (
                        <TableRow
                            key={row.homeName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {index + 1}.
                 </TableCell>
                            <TableCell>{row.homeName}</TableCell>
                            <TableCell>{row.homeScore} : {row.awayScore}</TableCell>
                            <TableCell>{row.awayName}</TableCell>
                            <TableCell align="right">
                                <Modal
                                    onSubmit={updateGameModal}
                                    homeLabel={row.homeName}
                                    awayLabel={row.awayName}
                                    homeInput={row.homeScore}
                                    awayInput={row.awayScore}
                                    index={index}
                                    inputType="number"
                                    operation="Update"
                                />
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => removeGame(index)} variant="outlined">Finish</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ScoreTable;
