import React from 'react';
import './App.scss';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import Nav from './Components/Nav';

function App(props) {
  return (
    <div>
      { 
        props.location.pathname !== '/' ?
        <Nav /> :
        null
      }
      { routes }
    </div>
  );
}

export default withRouter(App);