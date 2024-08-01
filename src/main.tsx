import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider> {/* Envolva o App com AuthProvider */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
