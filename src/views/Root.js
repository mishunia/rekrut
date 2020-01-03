import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './../store'
import { ThemeProvider } from 'styled-components'
import { Global, Theme, InnerStyled } from '../components/Styles'
import { routes } from './../routes/routes'
import Homepage from './Homepage'
import UserDetails from './UserDetails'
import PostDetails from './PostDetails'

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <>
          <InnerStyled>
            <Global />
            <BrowserRouter>
              <Switch>
                <Route exact path={routes.home} component={Homepage} />
                <Route exact path={routes.userId} component={UserDetails} />
                <Route path={routes.userPost} component={PostDetails} />
              </Switch>
            </BrowserRouter>
          </InnerStyled>
        </>
      </ThemeProvider>
    </Provider>
  )
}

export default Root
