import './lib/polyfill'
import 'regenerator-runtime/runtime'
import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { AppContainer } from 'react-hot-loader/'
import Routes from './Routes'

const Render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  )
}

Render(Routes)

if (module.hot) {
  module.hot.accept(() => {
    Render(Routes)
  })
}
