// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './redux/Store';
import Header from './components/Header'
import Home from './pages/Home'
import styles from './App.scss'

type Props = {}

class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header/>
            <div className={styles.main}>
              <Route exact path='/' component={Home} />
              <Route path='/:code' component={Home} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
