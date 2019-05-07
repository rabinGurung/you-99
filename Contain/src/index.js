import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './Components/Main'
import browser_router from 'react-router-dom'
import './Styles/signup.css'



ReactDOM.render(<browser_router><App /></browser_router>, document.getElementById('root'));

serviceWorker.register();
