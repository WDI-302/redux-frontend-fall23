import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Material UI
import { ThemeProvider } from '@emotion/react'
import {lightTheme, darkTheme} from './theme.jsx'
import {CssBaseline} from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline for browser compatibility */}
      <CssBaseline />
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
