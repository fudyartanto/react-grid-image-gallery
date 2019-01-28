// @flow
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

type Props = {}

class App extends Component<Props> {
  render () {
    return (
      <Router>
        <div>
          <Header/>
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/:code' component={Home} />
            </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
