import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  const handleSelectSquare =()=>{
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O': 'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">

          <Player initialplayerName={"Player 1"} playerSymbol={'X'} isActive={activePlayer === 'X'}/>
          <Player initialplayerName={"Player 2"} playerSymbol={'O'} isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      log
    </main>
  )
}

export default App
