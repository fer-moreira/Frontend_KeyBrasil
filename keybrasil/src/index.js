import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'

import './styles/scss/main.scss';
import Navbar from './components/Navbar'

ReactDOM.render(
  <div className="main">
    <Navbar />
    <Routes />
  </div>,
  document.getElementById('root')
);
