const RandomList = ({ numbers }) => {
  return (
    <div className="list flex gap-2 text-lg font-bold">
      {numbers.map((num, index) => (
        <span key={index}>{num}</span>
      ))}
    </div>
  )
}

export default RandomList
