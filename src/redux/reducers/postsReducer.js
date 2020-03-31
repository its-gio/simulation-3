import axios from 'axios';

const initialState = {
  posts: null
}

// Actions
// const POST_CONTENT = "POST_CONTENT";
const GET_CONTENT = "GET_CONTENT";
const GET_QUERY_POST = "GET_QUERY_POST";

// Export Function
export function getContent() {
  const data = axios('/api/posts');
  return { type: GET_QUERY_POST, payload: data };
}

export function getQueryPost(query) {
  const data = axios(`/api/posts?title=${query}`);
  return { type: GET_CONTENT, payload: data };
}

// Reducers
export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case `${GET_CONTENT}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_CONTENT}_FULFILLED`:
      return {
        ...state,
        posts: payload.data,
        loading: false
      }

    case `${GET_QUERY_POST}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_QUERY_POST}_FULFILLED`:
      return {
        ...state,
        posts: payload.data,
        loading: false
      }

    default: return state;
  }
}