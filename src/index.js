import Routes from './Routes'
import('./lib/init').then(({ React, ReactDOM, BrowserRouter, AppContainer }) => {
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
})
