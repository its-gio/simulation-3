import React from 'react';

function MappedPosts(props) {
  return (
    <div className="post-list--item">
      <span>{props.post.title}</span>
      <span>
        <img src={`https://robohash.org/${props.post.username}`} alt=""/>
        <span>{props.post.username}</span>
      </span>
    </div>
  )
}

export default MappedPosts;
