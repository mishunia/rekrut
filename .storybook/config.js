import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/components/_base/Theme'
import Global from '../src/components/_base/Global'

global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}

global.__PATH_PREFIX__ = ''
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <ThemeProvider theme={Theme}>
    <>
      <Global />
      {story()}
    </>
  </ThemeProvider>
))

configure(loadStories, module)
