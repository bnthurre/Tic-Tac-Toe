import React, { useState } from 'react'

const Players = ({ initialplayerName, playerSymbol }) => {
    const [playerName, setPlayerName] = useState(initialplayerName)
    const [isEdeting, setIsEdeting] = useState(false);

    const handleEditClick = () => {
        setIsEdeting(!isEdeting)
    }

    const handelChange=(e)=>{
        setPlayerName(e.target.value)

    }

    let EditablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'
    if(isEdeting){
        EditablePlayerName = <input type='text' required value={playerName} onChange={handelChange}/>
        btnCaption='Save'
    }
    return (
        <li>
            <span className="player">
                {EditablePlayerName}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            {/* altenative */}
            {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
            <button onClick={handleEditClick}>{isEdeting ? 'Save': 'Edit'}</button>
        </li>
    )
}

export default Players
