import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Nav/>
    <App />
  </StrictMode>,
)
