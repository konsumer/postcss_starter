import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Demo from '.'

storiesOf('Demo', module).add('example', () => (
  <Demo onClick={action('click')} />
))
