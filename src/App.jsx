import React, { useState } from 'react'
import './App.css'
import Nav from './components/Navbar/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
    </div>
  )
}

export default App
