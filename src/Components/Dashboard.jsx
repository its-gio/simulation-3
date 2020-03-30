import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiSearch } from 'react-icons/fi';

class Dashboard extends Component {
  state = {
    title: '',
    checkbox: true
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="content-container">
        <div className="content-container--inner">
          <form className="search">
            <div className="search--input">
              <input onChange={this.handleChange} value={this.state.title} name="title" type="text" placeholder="Search By Title" />
              <button><FiSearch /></button>
              <button>Reset</button>
            </div>

            <legend className="search--checkbox">
              <span>My Posts:</span> <input type="checkbox"/>
            </legend>
          </form>

          <div className="post-list">

          </div>
        </div>
      </div>
    )
  }
}

export default connect((reduxState) => ({ user: reduxState.user }), {})(Dashboard);