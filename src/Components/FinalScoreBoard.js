import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function FinalScoreBoard({scoreBoard}) {
    const [board, setBoard] = useState(scoreBoard);
    
    useEffect(() => {
        setOrder();
      }, [scoreBoard]);

    const setOrder = () =>{
        if(scoreBoard.length != 0){
            let ascending = scoreBoard.sort((a, b) => Number(a.homeScore + a.awayScore) - Number(b.homeScore + b.awayScore));
            setBoard(scoreBoard)
        }
    }


    return (

        <>
        <div style={{ padding: '50px 0 30px 0'}}>
           Final Score board
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
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
        </>
    );
  }
  
  export default FinalScoreBoard;