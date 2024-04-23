import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Make footer sticky to bottom of page
document.documentElement.classList.add('h-100');
document.body.classList.add('d-flex', 'flex-column', 'h-100'); 
document.getElementById('root').classList.add('d-flex', 'flex-column', 'h-100'); 
