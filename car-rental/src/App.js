import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import React from 'react'
import Navbar from './Navbar'
import FindCar from './components/FindCar'
import Register from './components/Register'
import EditInventoryCar from './components/EditInventoryCar'
import InventoryManagement from './components/InventoryManagement'

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
          <Route exact path="/edit-inventory-car" element={<EditInventoryCar />} />
          <Route path="/edit-inventory-car/:id" exact element={<EditInventoryCar/>} />
          <Route
            path="/inventory-management"
            element={<InventoryManagement />}
          />
          <Route
            path="/"
            element={
              <div>
                <p>Home</p>
              </div>
            }
          />
        </Routes>
        {/* <Navbar/> */}
      </div>
    </Router>
  )
}

export default App
