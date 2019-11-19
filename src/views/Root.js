import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './../store'
import { ThemeProvider } from 'styled-components'
import { Global, Theme, InnerStyled } from '../components/Styles'
import { routes } from './../routes/routes'
import Homepage from './Homepage'
import UserDetails from './UserDetails'

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <>
        <InnerStyled>
          <Global />
          <BrowserRouter>
            <Switch>
              {/* <Route
              exact
              path={routes.home}
              render={() => <Redirect to="/" />}
            /> */}
              <Route exact path={routes.home} component={Homepage} />
              <Route path={routes.userId} component={UserDetails} />
            </Switch>
          </BrowserRouter>
        </InnerStyled>
      </>
    </ThemeProvider>
  </Provider>
)

export default Root
