import {React, Fragment} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import ReactDom from 'react-dom';

import Dashboard from './components/dashboard/dashboard.jsx'


console.log('inside app.jsx')
const store = createStore(budgetcategoryReducer);

class App extends React.Component {
    render() {
        console.log('Inside app.jsx App')
        return <Fragment> 
            <p> Hello World </p>
        </Fragment>
    }
};

ReactDom.render(document.getElementById('root'));
