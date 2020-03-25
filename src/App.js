import React from 'react';
import './App.scss';
import Nav from './Components/Nav';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Post from './Components/Post';

function App() {
  return (
    <div>
      <Nav />
      <Auth />
      <Dashboard />
      <Form />
      <Post />
    </div>
  );
}

export default App;
