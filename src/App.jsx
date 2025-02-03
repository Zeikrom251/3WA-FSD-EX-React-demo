import "./App.css"
import Messages from "./components/Messages"

const MESSAGES = [
  { message: "React JS" },
  { message: "React Native" },
  { message: "Angular" },
  { message: "Symfony" },
  { message: "MongoDB" },
]

function App() {
  return (
    <div>
      <h1>Liste des messages</h1>
      <Messages messages={MESSAGES} />
    </div>
  )
}

export default App
