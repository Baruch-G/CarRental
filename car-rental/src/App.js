import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import React from 'react'
import Navbar from './Navbar'
import FindCar from './components/FindCar'
import Register from './components/Register'
import EditInventoryCar from './components/EditInventoryCar'
import InventoryManagement from './components/InventoryManagement'
import UsersManagemet from './components/UsersManagemet'
import AddCarForm from './components/AddCarForm'

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
          <Route path="/inventory-management/add" element={<AddCarForm />} />
          <Route path="/users-management" element={<UsersManagemet />} />
          <Route
            exact
            path="/inventory-management"
            element={<InventoryManagement />}
          />
          <Route
            path="/inventory-management/edit/:id"
            element={<EditInventoryCar />}
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
      </div>
    </Router>
  )
}

export default App
