import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './Nav'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Nav/> */}
    <App />
  </StrictMode>,
)
