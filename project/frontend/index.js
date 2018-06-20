import React from 'react'
import ReactDOM from 'react-dom'

import App from './component/app'
import './styles/index.scss'

let container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(
  <App />,
  container)