import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../redux/reducers/postsReducer';
import Loading from '../Loading';
import PostsList from './PostsList';
import SearchForm from './SearchForm'

class Dashboard extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  
  render() {
    const { loading, posts } = this.props.posts;
    return (
      <div className="content-container">
        <div className="content-container--inner">
          <SearchForm />

          {/* PostList Component */}
          <Loading loading={loading} render={() => <PostsList posts={posts} />}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => ({ user_id: reduxState.user.user_id, posts: reduxState.posts })

export default connect(mapStateToProps, { getPosts })(Dashboard);