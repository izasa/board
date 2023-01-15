import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddGameButton from './AddGame';
import { useState } from "react"


const initBoard = [
    {
        homeName: 'Alabama',
        homeScore: 5,
        awayName: 'AU',
        awayScore: 0
    },
    {
        homeName: 'Nevada',
        homeScore: 4,
        awayName: 'Arizona',
        awayScore: 2
    }
];

function ScoreBoard() {
    const [board, setBoard] = useState([]);

    const addGame = (home, away) => {
        const game = {homeName: home, homeScore:0, awayName: away, awayScore:0}

        setBoard([...board, game ]);
    }


    // React.useEffect(() => {
    //     console.log('useeffect')
    // }, [board]);

    return (
        <>
        <AddGameButton addNewGame={addGame}/>
        <div style={{ padding: '50px 0 30px 0'}}>
           Score board: currently {board.length} matches are played
        </div>
         <TableContainer component={Paper} style={{ 'max-width': '1000px',
            marginRight: 'auto',
            marginLeft: 'auto' }}>
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
                   {++index}.
                 </TableCell>
                 <TableCell>{row.homeName}</TableCell>
                 <TableCell>{row.homeScore} : {row.awayScore}</TableCell>
                 <TableCell>{row.awayName}</TableCell>
                 <TableCell align="right">BUTTON</TableCell>
                 <TableCell align="right">BUTTON</TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
        </>
    );
  }
  
  export default ScoreBoard;