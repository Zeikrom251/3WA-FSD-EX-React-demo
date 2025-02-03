const Student = ({ studentName, average }) => {
  return (
    <li>
      {studentName} - Moyenne: {average.toFixed(2)}
    </li>
  )
}

export default Student
