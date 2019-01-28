// @flow
import React, { Component } from 'react'
import GridImageGallery from 'react-grid-image-gallery'
import Flickr from '../../services/Flickr';

type Props = {}
type State = {}

class App extends Component<Props, State> {
  componentDidMount = () => {
    console.log('test')
    Flickr.searchImages('cats').then((data) => {
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        <GridImageGallery text='Test'/>
      </div>
    )
  }
}

export default App
