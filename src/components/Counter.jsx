import { useEffect } from "react"
import { useState } from "react"

const Counter = ({ increment }) => {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + increment >= 20) {
          setIsRunning(false)
          return 20
        }
        return prevCount + increment
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning, increment])

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setIsRunning(true)} disabled={isRunning}>
        Start
      </button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
        Stop
      </button>
    </div>
  )
}

export default Counter
