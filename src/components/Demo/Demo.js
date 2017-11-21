import React from 'react'

import './Demo.css'

export default ({onClick}) => (<div className='Demo'>
  This is a demo-component.
  You can see the code in <code>src/components/Demo</code>
  <button onClick={onClick}>click me!</button>
</div>)
