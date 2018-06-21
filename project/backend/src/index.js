import {React, Fragment, Component} from 'react';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import {BrowserRouter as Router,
    Route,
    link} from 'react-router-dom'
import ReactDOM from 'react-dom'

import FilePage from './components/filepage.jsx';
import Searchpage from './components/searchpage.jsx';
import HomePage from './components/homepage.jsx'
//import './style/main.scss'

console.log('inside app.jsx')
//const store = createStore(budgetcategoryReducer);

class App extends Component {
    render() {
      return <Router>
        <div>
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    }
  }
  
  let root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<App/>, root);

  //       <Route exact path="/api/files-tag" component={FilePage} />
  //      <Route path="/api/search-by-tag" component={Search} />

//   <nav>
//   <ul>
//     <li><Link to="/api/files-tag">FilePage</Link></li>
//     <li><Link to="/api/search-by-tag">Search</Link></li>
//   </ul>
// </nav>