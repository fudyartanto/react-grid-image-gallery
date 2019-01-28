// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './redux/Store';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

type Props = {}


class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default App
