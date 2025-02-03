import "./App.css"
import Student from "./components/Student"

const students = [
  { notes: [12, 11, 10], name: "Alan" },
  { notes: [18, 10, 19], name: "Alice" },
  { notes: [10, 9, 11], name: "Bernard" },
  { notes: [11, 17, 19], name: "Sophie" },
]

function App() {
  return (
    <div>
      <h1>Liste des étudiants</h1>
      <ul>
        {students.map((student, index) => (
          <Student
            key={index}
            studentName={student.name}
            average={
              student.notes.reduce((a, b) => a + b, 0) / student.notes.length
            }
          />
        ))}
      </ul>
    </div>
  )
}

export default App
