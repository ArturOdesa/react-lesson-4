import { useState } from 'react'
import './App.css'

function App() {
  const createRandomColor = () => {
    let colorValue = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return colorValue;
  }
  const [color, setColor] = useState('#000000');
  
  const changeColorHadler = () => {
    return setColor(createRandomColor());
  }


  return (
    <>
      <p style={{ color: color }}>Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component. <br />
      ou’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].
        The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it.
      </p>
      <button onClick={changeColorHadler}>Change color</button>
    </>
  )
}

export default App
