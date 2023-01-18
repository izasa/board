import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Modal from '../Modal/Modal';
import ScoreTable from '../ScoreTable/ScoreTable';

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

    const updateGameModal = (homeScore, awayScore, index) => {
        const newBoard = [...board];
        if (homeScore !== '') {
            newBoard[index].homeScore = Number(homeScore)
        }
        if (awayScore !== '') {
            newBoard[index].awayScore = Number(awayScore)
        }
        setBoard(setBoardOrder(newBoard));
    }

    const getMatchTitle = () =>
        board.length !== 1
            ? `Score board: currently ${board.length} matches are played`
            : 'Score board: currently 1 match is played'

    return (
        <>
            <div style={{
                'margin': '20px 0'
            }}>
                <Modal
                    onSubmit={addGame}
                    homeLabel="Home team name"
                    awayLabel="Away team name"
                    homeInput=""
                    awayInput=""
                    index={null}
                    inputType="text"
                    operation="Add"

                />
            </div>
            <Divider variant="middle" />
            <div data-cy="title" style={{ padding: '50px 0 30px 0' }}>
                {getMatchTitle()}
            </div>
            {board.length > 0 && (<ScoreTable board={board} updateGameModal={updateGameModal} removeGame={removeGame} />)}
        </>
    );
}

export default ScoreBoard;