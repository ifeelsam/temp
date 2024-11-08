import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Header />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
