const RandomList = ({ numbers }) => {
  return (
    <div>
      {numbers.map((num, index) => (
        <span key={index}>{num}</span>
      ))}
    </div>
  )
}

export default RandomList
