import React, { useState } from 'react'
import './TicTac.css'

const TicTac = () => {
    // declare state variables for the game board, current player, and winner
    const [board, setboard] = useState(Array(9).fill(null));
    const [player, setplayer] = useState('X');
    const [winner, setwinner] = useState(null)

    // define possible winning combinations
    const checkWinner = (board) => {
        const lines = [
            [1, 2, 3],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // check if any of winning combinations have been achived by a player

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        // return null if their is no winner
        return null;
    };

    // handle check events on the game board
    const handleClick = (index) => {
        // create a new board array
        const newBoard = [...board];
        // check if their is a winner or square has already been clicked
        if (winner || newBoard[index]) return;
        // set the nre board state

        newBoard[index] = player;
        setboard(newBoard);
        setplayer(player === 'X' ? 'O' : 'X');
        setwinner(checkWinner(newBoard));
    };

    // render a single square on the game board

    const renderSquare = (index) => (
        <button className='square' onClick={() => handleClick(index)}>{board[index]}</button>
    );

    // render the entire board
    const renderBoard = () => (
        <div className='board'>
            <div className='row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );

    // render game status message
    const renderStatus = () => {
        if (winner) {
            return `Winner: ${winner}`;
        } else if (board.every((value) => value!= null)) {
            return 'Draw';
        } else {
            return `Next player : ${player}`;
        }
    };

    //  reset the game to its initial state
    const resetGame = () => {
        setboard(Array(9).fill(null));
        setplayer('X');
        setwinner(null);
    }


    return (
        <div className='game'>
            <h1>
                React - TicTacToe
            </h1>
            <div className='game-info'>
                <div>{renderStatus()}</div>
              
            </div>
            
            <div className='game-board'>
                {renderBoard()}
            </div>
         
            <button onClick={resetGame}>Reset Game</button>
        </div>
    )
}

export default TicTac