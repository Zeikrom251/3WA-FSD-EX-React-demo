import { useReducer } from "react"
import "../components/Calculator.style.css"

const initialState = {
  num1: "",
  num2: "",
  result: null,
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_NUM1":
      return { ...state, num1: action.payload }

    case "SET_NUM2":
      return { ...state, num2: action.payload }

    case "ADD":
      return { ...state, result: Number(state.num1) + Number(state.num2) }

    case "MULTIPLY":
      return { ...state, result: Number(state.num1) * Number(state.num2) }

    case "RESET":
      return initialState

    default:
      return state
  }
}

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInputChange = (e, type) => {
    const value = e.target.value
    // Une regex qui permet d'autoriser uniquement les chiffres
    if (/^\d*$/.test(value)) {
      dispatch({ type, payload: value })
    }
  }

  return (
    <div className="calculator">
      <h2>Calculatrice</h2>
      <div className="result">
        Résultat : {state.result !== null ? state.result : "--"}
      </div>

      <div className="inputs">
        <label>
          Num1 :
          <input
            type="text"
            value={state.num1}
            onChange={(e) => handleInputChange(e, "SET_NUM1")}
          />
        </label>

        <label>
          Num2 :
          <input
            type="text"
            value={state.num2}
            onChange={(e) => handleInputChange(e, "SET_NUM2")}
          />
        </label>
      </div>

      <div className="buttons">
        <button
          onClick={() => dispatch({ type: "ADD" })}
          disabled={state.num1 === "" || state.num2 === ""}>
          +
        </button>
        <button
          onClick={() => dispatch({ type: "MULTIPLY" })}
          disabled={state.num1 === "" || state.num2 === ""}>
          *
        </button>

        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  )
}

export default Calculator
