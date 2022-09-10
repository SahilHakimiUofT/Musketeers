import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './layouts/NavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavBar/>
    </div>
  )
}

export default App
