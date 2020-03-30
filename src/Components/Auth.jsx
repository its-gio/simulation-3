import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestRegister, requestLogin } from '../redux/reducers/userReducer';
import { Redirect } from 'react-router-dom';


class Auth extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegister = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.requestRegister(username, password);
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.requestLogin(username, password);
  }

  render() {
    return (
      <div>
        { this.props.user.user_id ? <Redirect to="/dashboard" /> : null }
        <form className="auth-form">
          <legend>
            Username:
            <input onChange={this.handleInput} name="username" value={this.state.username} />
          </legend>

          <legend>
            Password:
            <input onChange={this.handleInput} name="password" value={this.state.password} type="password" />
          </legend>

          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </form>
      </div>
    )
  }
}

export default connect((reduxState) => ({ user: reduxState.user }), { requestRegister, requestLogin })(Auth)