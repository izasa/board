import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Modal from './Modal';

function ScoreBoard() {

    const [board, setBoard] = useState([]);

    const setBoardOrder = (scoreBoard) => {
        const result = scoreBoard.sort((a, b) => {
            if ((a.homeScore + a.awayScore) === (b.homeScore + b.awayScore)) {
                return a.date < b.date ? -1 : 1;
            } else {
                return ((a.homeScore + a.awayScore) > (b.homeScore + b.awayScore)) ? -1 : 1;
            }
        });
        return result;
    }

    const addGame = (home, away) => {
        const game = { homeName: home, homeScore: 0, awayName: away, awayScore: 0, date: Date.now() }
        setBoard(setBoardOrder([...board, game]));
    }

    const removeGame = (index) => {
        const newBoard = [...board];
        newBoard.splice(index, 1);
        setBoard(setBoardOrder(newBoard));
    }

    const updateGameModal = (homeScore, awayScore, index ) => {
        const newBoard = [...board];
        if (homeScore !== '') {
            newBoard[index].homeScore = Number(homeScore)
        }
        if (awayScore !== '') {
            newBoard[index].awayScore = Number(awayScore)
        }
        setBoard(setBoardOrder(newBoard));
    }

    return (
        <>
            <div style={{
                'margin': '20px 0'
            }}><Modal
                    onSubmit={addGame}
                    homeLabel="Home team name"
                    awayLabel="Away team name"
                    homeInput=""
                    awayInput=""
                    index={null}
                    inputType="text"
                    operation="Add"

                /></div>

            <Divider variant="middle" />

            <div style={{ padding: '50px 0 30px 0' }}>
                Score board: currently {board.length} matches are played
        </div>
            <TableContainer component={Paper} style={{
                'max-width': '1000px',
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
        </>
    );
}

export default ScoreBoard;