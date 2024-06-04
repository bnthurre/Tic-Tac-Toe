import React from 'react'
const initialGameBoard = [
    [null, null, null]
    [null, null, null]
    [null, null, null]
]
const GameBoard = () => {
    return (
        <ol id='game-board'>
            {initialGameBoard.map((row, rowindex) => <li key={rowindex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}><button>{col}</button></li>)}
                </ol>
            </li>)}

        </ol>
    )
}

export default GameBoard
