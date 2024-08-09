import React from 'react'
import ReactDOM from 'react-dom/client'
import '../tailwind.config.js'
import '../src/index.css'
import Home from './pages/Home/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
