import Players from "./components/Players"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          
          <Players playerName={"Player 1"} playerSymbol={'X'}/>
          <Players playerName={"Player 2"} playerSymbol={'O'}/>
        </ol>
        Game Boards
      </div>
      log
    </main>
  )
}

export default App
