import { useEffect } from "react"
import { useState } from "react"

const SortedList = ({ numbers }) => {
  const [sortedNumbers, setSortedNumbers] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < numbers.length) {
      const timer = setTimeout(() => {
        setSortedNumbers(numbers.slice(0, index + 1))
        setIndex(index + 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [index, numbers])

  return (
    <div>
      {sortedNumbers.map((num, index) => (
        <span key={index}>{num}</span>
      ))}
    </div>
  )
}

export default SortedList
