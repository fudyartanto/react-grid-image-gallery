import React, { Component } from 'react'

import ExampleComponent from 'react-grid-image-gallery'

export default class App extends Component {
  render () {
    console.log(process.env)
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
