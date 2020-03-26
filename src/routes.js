import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import Post from './Components/Post'

export default (
  <Switch>
    <Route path="/post/:post_id" component={Post} />
    <Route path="/new" component={Form} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/" component={Auth} />
  </Switch>
)