import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToggleProvider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToggleProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
  </ToggleProvider>
)
