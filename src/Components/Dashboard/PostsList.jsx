import React from 'react';
import PostItem from './PostItem'

function PostsList(props) {
  const mappedPosts = props.posts.map((post, i) => <PostItem post={post} key={i} />);
  return (
    <div className="post-list">
      { mappedPosts }
    </div>
  )
}

export default PostsList
