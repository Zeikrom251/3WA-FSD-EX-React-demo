import { useEffect } from "react"
import { useState } from "react"

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Le composant Clickcounter est monté !")
    return () => console.log("Le composant ClickCounter est démonté !")
  }, [])

  useEffect(() => {
    if (count === 10) {
      alert("Vous avez cliqué 10 fois !")
    }
  }, [count])

  return (
    <div>
      <h2>Compteur: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Clique-moi</button>
    </div>
  )
}

export default ClickCounter
