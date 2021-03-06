import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Checkbox from './react'

storiesOf('Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'checked with a click event',
    withState({ checked: true })(({ store }) => (
      <Checkbox
        checked={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
      />
    )),
  )
  .add('fully controlled', () => {
    const checked = boolean('Checked', true)
    return <Checkbox checked={checked} />
  })
