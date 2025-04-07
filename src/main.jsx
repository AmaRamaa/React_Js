import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GirafStyleComponent from './components/GirafStyleComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GirafStyleComponent />
  </StrictMode>,
)
