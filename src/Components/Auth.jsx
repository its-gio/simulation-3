import React, { Component } from 'react'

export default class Auth extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form className="auth-form">
          <legend>
            Username:
            <input onChange={this.handleInput} name="username" value={this.state.username} />
          </legend>

          <legend>
            Password:
            <input onChange={this.handleInput} name="password" value={this.state.password} type="password" />
          </legend>

          <button>Login</button>
          <button>Register</button>
        </form>
      </div>
    )
  }
}
