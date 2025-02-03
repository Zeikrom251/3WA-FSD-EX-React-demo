import { useEffect, useState } from "react"

const Counter = ({ increment }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + increment) % 10)
    }, 1000)

    return () => clearInterval(interval)
  }, [increment])

  return <p>Compteur : {count}</p>
}

export default Counter
