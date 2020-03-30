import axios from 'axios';

const initialState = {
  posts: null
}

// Actions
// const POST_CONTENT = "POST_CONTENT";
const GET_CONTENT = "GET_CONTENT";

// Export Function
export function getContent() {
  const data = axios('/api/posts');
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
      console.log(payload.data)
      return {
        ...state,
        posts: payload.data,
        loading: false
      }

    default: return state;
  }
}