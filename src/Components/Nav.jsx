import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <img src="" alt=""/>
          name
        </div>


      </nav>
    )
  }
}

export default connect((reduxState) => ({ user: reduxState.user }), {})(Nav);