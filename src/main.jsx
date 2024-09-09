import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/index.css'
import '/src/input.css'
import Home from '/src/pages/home/home.jsx'
import Skill from '/src/pages/skills/skills.jsx'

export function App() {
  return (
    <div className="items-center justify-center h-screen">
      <Home />
      <Skill />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
