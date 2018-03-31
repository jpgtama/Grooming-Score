import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter, HashRouter  } from 'react-router-dom';
import  './styles/appStyles.scss';


ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('app'));
