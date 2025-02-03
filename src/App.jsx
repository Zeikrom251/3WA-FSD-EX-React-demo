import "./App.css"
import Counter from "./components/Counter"

function App() {
  return (
    <div>
      <h1>Compteur avec contrôle</h1>
      <Counter increment={1} />
      <Counter increment={2} />
    </div>
  )
}

export default App
