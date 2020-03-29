import axios from 'axios';

const initialState = {
  user_id: null,
  username: null
}

// Actions
const REQUEST_REGISTER = "REQUEST_REGISTER";
const REQUEST_LOGIN = "REQUEST_LOGIN";
const GET_LOGOUT = "GET_LOGOUT";
const GET_SESSION = "GET_SESSION";

// Export Function
export function requestRegister(username, password) {
  const data = axios.post('/auth/register', { username, password });

  return { type: REQUEST_REGISTER, payload: data };
}

// Reducer
export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case `${REQUEST_REGISTER}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${REQUEST_REGISTER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.user_id,
        username: payload.username,
        loading: false
      }
      
    default: return state
  }
}