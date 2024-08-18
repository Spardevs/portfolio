import React, { } from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import '../src/input.css';
import LanguageSelect from './components/languageSelect/languageSelect.jsx';
import Home from './pages/home/home.jsx';
import Skill from './pages/skills/skills.jsx';


export function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LanguageSelect />
      <Home />
      <Skill />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
