import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from '../landing'
import Dashboard from '../dashboard'
import {AuthProvider} from '../context'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="app">
          <BrowserRouter>
            <div>
              <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/signup" component={Landing} />
                <Route exact path="/login" component={Landing} />
                <Route exact path="/dashboard" component={Dashboard} />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </AuthProvider>
    )
  }
}

export default App