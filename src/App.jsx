import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">

          <Player initialplayerName={"Player 1"} playerSymbol={'X'} />
          <Player initialplayerName={"Player 2"} playerSymbol={'O'} />
        </ol>
        <GameBoard />
      </div>
      log
    </main>
  )
}

export default App
