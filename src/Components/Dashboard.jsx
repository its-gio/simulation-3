import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiSearch } from 'react-icons/fi';

import { getContent } from '../redux/reducers/postsReducer';

class Dashboard extends Component {
  state = {
    title: '',
    checkbox: true
  }

  componentDidMount() {
    this.props.getContent();
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

const mapStateToProps = (reduxState) => ({ user_id: reduxState.user.user_id, posts: reduxState.posts })

export default connect(mapStateToProps, { getContent })(Dashboard);