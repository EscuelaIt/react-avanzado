import 'reflect-metadata'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './app'
import { worker } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
