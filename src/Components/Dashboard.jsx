import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiSearch } from 'react-icons/fi';

class Dashboard extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="content-container--inner">
          <form className="search">
            <input type="text"/>
            <button><FiSearch /></button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect((reduxState) => ({ user: reduxState.user }), {})(Dashboard);