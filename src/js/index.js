import '../scss/main.scss'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
