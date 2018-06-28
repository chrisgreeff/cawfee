import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import store from './redux/store'

import { routeService } from './services'
import { ROUTES } from './rconstants'

import { HomeLandingPage } from './view/pages/home/landing'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={routeService.get(ROUTES.home.root)} component={HomeLandingPage} />
        <Redirect to={routeService.get(ROUTES.home.root)} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('caw-app')
)