import { useState } from 'react'
import './App.css'

function App() {
  function createRandomValue() {
    return Math.floor(Math.random() * 1001);
  }
  const [values, setValues] = useState([54, 23, 89, 67, 12, 41, 97, 35, 76, 5]);

  const addRandomValue = () => {
    
    setValues([...values, createRandomValue()]);
  }

  return (
    <>
      <ul>
        {values.map((value) => <li>{value}</li>)}
      </ul>
      <button onClick={addRandomValue}>Add random value</button>
    </>
  )
}

export default App
