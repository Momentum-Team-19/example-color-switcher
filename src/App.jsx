import './App.css'

function App() {
  // when I click a button, the background color of the page changes to that color
  // need to click on a button and know what color to change to
  // mechanism for changing the background color

  const handleClickonOrangeButton = () => {
    console.log('You clicked orange')
  }

  const handleClickonTealButton = () => {
    console.log('You clicked teal')
  }

  const handleClickonPurpleButton = () => {
    console.log('You clicked purple')
  }

  const handleClickonRedButton = () => {
    console.log('You clicked red')
  }

  const handleClickonGreenButton = () => {
    console.log('You clicked green')
  }

  return (
    <div id="controls" className="container">
      <button onClick={handleClickonOrangeButton}>Orange</button>
      <button onClick={handleClickonPurpleButton}>Purple</button>
      <button onClick={handleClickonTealButton}>Teal</button>
      <button onClick={handleClickonRedButton}>Red</button>
      <button onClick={handleClickonGreenButton}>Green</button>
    </div>
  )
}

export default App
