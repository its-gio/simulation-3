import axios from 'axios';

const initialState = {
  posts: null
}

// Actions
// const POST_CONTENT = "POST_CONTENT";
const GET_POSTS = "GET_POSTS";

// Export Function
export function getPosts(query) {
  let data;
  if (query) {
    const key = Object.keys(query)[0];
    data = axios(`/api/posts?${key}=${query.title}`);
  } else {
    data = axios('/api/posts');
  }

  return { type: GET_POSTS, payload: data };
}

// Reducers
export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case `${GET_POSTS}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_POSTS}_FULFILLED`:
      return {
        ...state,
        posts: payload.data,
        loading: false
      }

    default: return state;
  }
}