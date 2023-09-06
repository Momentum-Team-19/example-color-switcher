import './App.css'
import { useState } from 'react'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('papayawhip')
  // when I click a button, the background color of the page changes to that color
  // need to click on a button and know what color to change to
  // mechanism for changing the background color

  const handleClickonOrangeButton = () => {
    console.log('You clicked orange')
    /// I can set state here for backgroundColor
    setBackgroundColor('orange')
  }

  const handleClickonTealButton = () => {
    console.log('You clicked teal')
    setBackgroundColor('teal')
  }

  const handleClickonPurpleButton = () => {
    console.log('You clicked purple')
    setBackgroundColor('purple')
  }

  const handleClickonRedButton = () => {
    console.log('You clicked red')
    setBackgroundColor('red')
  }

  const handleClickonGreenButton = () => {
    console.log('You clicked green')
    setBackgroundColor('green')
  }

  return (
    <div id="controls" className={'container ' + backgroundColor}>
      <button onClick={handleClickonOrangeButton}>Orange</button>
      <button onClick={handleClickonPurpleButton}>Purple</button>
      <button onClick={handleClickonTealButton}>Teal</button>
      <button onClick={handleClickonRedButton}>Red</button>
      <button onClick={handleClickonGreenButton}>Green</button>
    </div>
  )
}

export default App
