import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import App from './containers/App' 
import {Route,BrowserRouter} from 'react-router-dom'



//import registerServiceWorker from './registerServiceWorker'

import './index.css'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Route path ="/" component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
//registerServiceWorker()
