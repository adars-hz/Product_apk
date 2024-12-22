import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Addproduct from './components/Addproduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar/>
       <Routes>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/addproduct" element={<Addproduct/>} />
       </Routes>
      </div>
    </>
  )
}

export default App
