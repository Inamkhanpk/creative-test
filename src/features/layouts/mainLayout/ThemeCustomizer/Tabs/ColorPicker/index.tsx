import React, { Fragment } from 'react'
import ColorsComponent from './Color'
import MixLayoutComponent from './MixLayout'

function ColorPicker() {
  return (
    <Fragment>
      <ColorsComponent />
      <MixLayoutComponent />
    </Fragment>
  )
}

export default ColorPicker
