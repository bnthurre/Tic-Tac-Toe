import React, { useState } from 'react'
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const handleSelectSquare = (rowindex, colindex) => {
        setGameBoard((prevGameBoard) => {
            const updateGameBoard = [...prevGameBoard]
            updateGameBoard[rowindex][colindex] = 'X'
            return updateGameBoard
        })
    }
    return (
        <ol id='game-board'>
            {initialGameBoard.map((row, rowindex) => <li key={rowindex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowindex, colIndex)}>{col}</button></li>)}
                </ol>
            </li>)}

        </ol>
    )
}

export default GameBoard
