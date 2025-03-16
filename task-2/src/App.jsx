import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('New value will be displayed here');

  const createRandomValue = () => {
    return Math.floor(Math.random() * 100);
  }

  const addText = () => {
    setText(createRandomValue());
  }

  return (
    <>
      <p>{text}</p>
      <button onClick={addText}>Add random value</button>
    </>
  )
}

export default App
