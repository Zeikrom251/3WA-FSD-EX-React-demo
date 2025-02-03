import "./App.css"
import Counter from "./components/Counter"

function App() {
  return (
    <div>
      <h1>Compteur Cyclique</h1>
      <Counter increment={2} />
    </div>
  )
}

export default App
