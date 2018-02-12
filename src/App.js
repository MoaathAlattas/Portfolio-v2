import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

const App = () => <Routes />

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept(() => {
    window.location.reload()
  })
}
