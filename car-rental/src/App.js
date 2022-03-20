import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import FindCar from './components/FindCar'
import Register from './components/Register'

function App() {
  const [user, setUser] = React.useState({})

  const setUserState = (user) => {
    setUser(user)
  }

  return (
    <Router>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/login" element={<Login onLogin={setUserState} />} />
          <Route path="/find-car" element={<FindCar />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <div>
                <p>Home</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
