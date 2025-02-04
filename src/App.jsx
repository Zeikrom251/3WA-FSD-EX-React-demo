import "./App.css"
import RandomList from "./components/RandomList"
import SortedList from "./components/SortedList"
import generateRandomNumbers from "./utils/generateRandomNumbers"

function App() {
  const randomNumbers = generateRandomNumbers()
  const sortedNumbers = [...randomNumbers].sort((a, b) => a - b)
  return (
    <div>
      <h1>Challenge - Liste Aléatoire</h1>
      <RandomList numbers={randomNumbers} />
      <h2>Liste Ordonnée</h2>
      <SortedList numbers={sortedNumbers} />
    </div>
  )
}

export default App
