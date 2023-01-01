import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import InitFireStore from './firestore/config'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

InitFireStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
