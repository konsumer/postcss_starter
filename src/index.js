import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import Demo from './components/Demo'

const App = ({children}) => (<div className='App'>
  <p>Welcome to postcss_starter. You can edit the sourcecode for this page in <code>src/index.js</code></p>
  {children}
</div>)

ReactDOM.render(<App><Demo /></App>, document.getElementById('root'))
