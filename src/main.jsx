import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form49A from './Form49A.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Form49A /> */}
  </StrictMode>,
)
