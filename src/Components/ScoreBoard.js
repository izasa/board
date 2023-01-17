import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddGameButton from './AddGame';
import UpdateGame from './UpdateGame';
import Button from '@mui/material/Button';
import FinalScoreBoard from './FinalScoreBoard';

function ScoreBoard() {

    const [board, setBoard] = useState([]);
    const [finalBoard, setFinalBoard] = useState([]);

    const addGame = (home, away) => {
        const game = {homeName: home, homeScore:0, awayName: away, awayScore:0}
        setBoard([...board, game ]);
    }

    const removeGame = (index) => {
        const newBoard = [...board];
        const game = newBoard.splice(index, 1);
        console.log('removed  game: ');
        console.log(...game);
        setBoard(newBoard);
        setFinalBoard([...finalBoard, ...game]);
    }

    const updateGameModal =(index, homeScore, awayScore)=>{
        const newBoard = [...board];
        newBoard[index].homeScore = homeScore;
        newBoard[index].awayScore = awayScore;
        setBoard(newBoard);
    }

    console.log('finalBoard')
    console.log(finalBoard)
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
                   {index + 1}.
                 </TableCell>
                 <TableCell>{row.homeName}</TableCell>
                 <TableCell>{row.homeScore} : {row.awayScore}</TableCell>
                 <TableCell>{row.awayName}</TableCell>
                 <TableCell align="right">
                    <UpdateGame 
                        updateGame={updateGameModal}
                        index={index}
                        homeName={row.homeName}
                        awayName={row.awayName}
                        homeScore={row.homeScore}
                        awayScore={row.awayScore}
                    />
                </TableCell>
                <TableCell align="right">
                    <Button onClick={()=>removeGame(index)} variant="outlined">Finish</Button>
                </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
       <FinalScoreBoard scoreBoard={finalBoard}/>
        </>
    );
  }
  
  export default ScoreBoard;