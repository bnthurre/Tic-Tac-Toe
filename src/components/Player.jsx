import React, { useState } from 'react'

const Player = ({ initialplayerName, playerSymbol, isActive }) => {
    const [playerName, setPlayerName] = useState(initialplayerName)
    const [isEdeting, setIsEdeting] = useState(false);

    const handleEditClick = () => {
        setIsEdeting((isEdeting) => !isEdeting)
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
        <li className={isActive ? 'active': undefined}>
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

export default Player
