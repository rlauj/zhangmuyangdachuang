import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import MainMap from './components/MainMap'
import ProvinceDetail from './components/ProvinceDetail'
import MusicGame from './components/MusicGame'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  if (!user) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainMap user={user} onLogout={handleLogout} />} />
          <Route path="/province/:id" element={<ProvinceDetail user={user} onLogout={handleLogout} />} />
          <Route path="/game" element={<MusicGame user={user} onLogout={handleLogout} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

