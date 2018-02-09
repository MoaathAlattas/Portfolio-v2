import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept(() => {
    window.location.reload()
  })
}
