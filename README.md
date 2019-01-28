### Demo URL: [https://fudyartanto.github.io/react-grid-image-gallery/](https://fudyartanto.github.io/react-grid-image-gallery/)

# Table of Contents
1. [Run Example Project](#example)
2. [Usage](#usage)

## Run Example Project
```bash
git clone https://github.com/fudyartanto/react-grid-image-gallery.git
cd react-grid-image-gallery
npm install && npm run build
cd example
cp .env.example .env
npm install && npm start
```
* Note: Please change .env variable to your corresponding value.

## Usage

This library still not released yet, so please refer to this repo directly. Add this line to your package.json dependencies.

```javascript
{
  "dependencies": {
    "react-grid-image-gallery": "https://github.com/fudyartanto/react-grid-image-gallery.git",
  }
}
```

```javascript
import GridImageGallery from 'react-grid-image-gallery'
import React, { Component } from 'react'

const images = [
  {
    title: 'Title 1',
    description: 'Description 1',
    url: `https://farm5.staticflickr.com/4863/33017286328_f842c24ba1_n.jpg`,
    fullSizeUrl: `https://farm5.staticflickr.com/4863/33017286328_f842c24ba1_h.jpg`,
  },
  {
    title: 'Title 2',
    description: 'Description 1',
    url: `https://farm5.staticflickr.com/4863/33017286328_f842c24ba1_n.jpg`,
    fullSizeUrl: `https://farm5.staticflickr.com/4863/33017286328_f842c24ba1_h.jpg`,
  },
  {
    title: 'Title 3',
    description: 'Description 1',
    url: `https://farm5.staticflickr.com/4863/33017286328_f842c24ba1_n.jpg`,
    fullSizeUrl: `https://farm5.staticflickr.com/4863/33017286328_f842c24ba1_h.jpg`,
  },
  {
    title: 'Title 4',
    description: 'Description 1',
    url: `https://farm5.staticflickr.com/4863/33017286328_f842c24ba1_n.jpg`,
    fullSizeUrl: `https://farm5.staticflickr.com/4863/33017286328_f842c24ba1_h.jpg`,
  },
]

class Example extends Component<Props, State> {
  render() {
    return (
      <GridImageGallery
        images={images}
        isLoading={this.state.isLoading}
        isLoadingMore={this.state.isLoadingMore}
        loadMore={this.state.loadMore}
        hasMore={this.state.hasMore} />
    )
  }
}
```

