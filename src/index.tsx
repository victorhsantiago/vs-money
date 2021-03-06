import { createServer } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return []
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
