import React from 'react';
import './App.scss';
import routes from './routes';
import { HashRouter } from 'react-router-dom';

function App(props) {
  return (
    <HashRouter>
      { routes }
    </HashRouter>
  );
}

export default App;
