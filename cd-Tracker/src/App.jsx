import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import Demotracker from './Components/DemoTracker/DemoTracker'
import MiniDrawer from './Components/Navbar/Navbar'
import CallTracker from './Components/CallTracker/CallTracker'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();


  const isLoginPage = location.pathname === '/login';

  return (
    <>

      {isLoginPage ? null : <MiniDrawer />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/demo' element={<Demotracker />} />
        <Route path='/call' element={<CallTracker />} />

      </Routes>
    </>

  )
}

export default App
