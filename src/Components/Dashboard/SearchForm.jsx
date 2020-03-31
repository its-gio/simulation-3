import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';


export default class SearchForm extends Component {
  state = {
    title: '',
    checkbox: true,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
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
    )
  }
}
