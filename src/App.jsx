import "./App.css"
import RandomList from "./components/RandomList"
import SortedList from "./components/SortedList"
import generateRandomNumbers from "./utils/generateRandomNumbers"

function App() {
  const randomNumbers = generateRandomNumbers()
  const sortedNumbers = [...randomNumbers].sort((a, b) => a - b)
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <h1 className="text-3xl font-bold">Challenge - Liste Aléatoire</h1>
      <RandomList numbers={randomNumbers} />
      <h2 className="text-2xl mt-4">Liste Ordonnée</h2>
      <SortedList numbers={sortedNumbers} />
    </div>
  )
}

export default App
