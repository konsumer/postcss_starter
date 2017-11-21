import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

// webpack trick to glob-require
const req = require.context('../src', true, /(\.story\.js$)|(\.story\.jsx$)/)

setOptions({
  name: 'Styleguide',
  url: 'https://github.com/konsumer/postcss_starter',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: null,
  sidebarAnimations: true
})

configure(() => {
  require('../src/index.css')
  req.keys().forEach(filename => req(filename))
}, module)
