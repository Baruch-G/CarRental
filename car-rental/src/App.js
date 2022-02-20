import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import FindCar from './components/FindCar'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/find-car" element={<FindCar />} />
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
