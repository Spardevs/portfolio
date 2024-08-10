import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import '../src/input.css';
import LanguageSelect from './components/languageSelect/languageSelect.jsx';
import Home from './pages/home/home.jsx';
import feather from 'feather-icons';

export function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LanguageSelect />
      <Home />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
