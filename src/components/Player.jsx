import React, { useState } from 'react'

const Players = ({ playerName, playerSymbol }) => {
    const [isEdeting, setIsEdeting] = useState(false);
    const handleEditClick = () => {
        setIsEdeting(!isEdeting)
    }
    let editablePlayer = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'
    if(isEdeting){
        editablePlayer = <input type='text' required value={playerName}/>
        btnCaption='Save'
    }
    return (
        <li>
            <span className="player">
                {editablePlayer}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            {/* altenative */}
            {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
            <button onClick={handleEditClick}>{isEdeting ? 'Save': 'Edit'}</button>
        </li>
    )
}

export default Players
