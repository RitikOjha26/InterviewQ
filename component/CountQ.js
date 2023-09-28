import React from 'react'
//import ReactDOM from 'react-dom'
import {useState, useEffect} from 'react'
function CountQ() {
  const initialCount = parseInt(localStorage.getItem('count'), 10) || 0
  const [Count, SetCount] = useState(initialCount)
  //const [check,Setcheck]=useState(false);
  useEffect(() => {
    // Save the count to localStorage whenever it changes
    localStorage.setItem('count', Count.toString())
  }, [Count])
  const increment = () => {
    SetCount((prev) => prev + 1)
  }
  const decrement = () => {
    // const check = Count > 0 ? true : false
    // if (check) SetCount(Count - 1)
    if (Count !== 0) {
      SetCount(Count - 1)
    }
  }
  const reset = () => {
    SetCount(0)
  }
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CountQ
