import React from 'react';
import './App.scss';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import Nav from './Components/Nav';

function App(props) {
  const curPath = props.location.pathname !== '/'
  return (
    <div className={curPath ? "account" : '' }>
      { curPath ? <Nav /> : null }
      { routes }
    </div>
  );
}

export default withRouter(App);