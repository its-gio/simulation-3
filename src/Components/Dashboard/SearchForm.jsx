import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { connect } from 'react-redux';

import { getPosts } from '../../redux/reducers/postsReducer';

class SearchForm extends Component {
  state = {
    title: '',
    checkbox: true,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  clearSearch = (e) => {
    e.preventDefault();
    this.setState({ title: '' });
  }

  handleQuerySearch = (e) => {
    e.preventDefault();
    const { title } = this.state;
    this.props.getPosts({ title });
  }

  render() {
    return (
      <form className="search">
        <div className="search--input">
          <input onChange={this.handleChange} value={this.state.title} name="title" type="text" placeholder="Search By Title" />
          <button onClick={this.handleQuerySearch}><FiSearch /></button>
          <button onClick={this.clearSearch}>Reset</button>
        </div>

        <legend className="search--checkbox">
          <span>My Posts:</span> <input type="checkbox"/>
        </legend>
      </form>
    )
  }
}

export default connect(null, { getPosts })(SearchForm)