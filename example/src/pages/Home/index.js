// @flow
import React, { Component } from 'react'
import GridImageGallery from 'react-grid-image-gallery'

type Props = {}
type State = {}

class App extends Component<Props, State> {
  render() {
    return (
      <div>
        <GridImageGallery text='Test'/>
      </div>
    )
  }
}

export default App
