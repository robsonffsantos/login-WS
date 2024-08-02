import React from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './App'
import { AuthProvider } from './context/AuthContext'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  </React.StrictMode>,
)
