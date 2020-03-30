import axios from 'axios';

const initialState = {
  user_id: null,
  username: null
}

// Actions
const REQUEST_REGISTER = "REQUEST_REGISTER";
const REQUEST_LOGIN = "REQUEST_LOGIN";
// const GET_LOGOUT = "GET_LOGOUT";
const GET_SESSION = "GET_SESSION";

// Export Function
export function requestRegister(username, password) {
  const data = axios.post('/auth/register', { username, password });
  return { type: REQUEST_REGISTER, payload: data };
}

export function requestLogin(username, password) {
  const data = axios.post('/auth/login', { username, password });

  return { type: REQUEST_LOGIN, payload: data };
}

export function getSession() {
  const data = axios.get('/auth/session');

  return { type: GET_SESSION, payload: data };
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
        user_id: payload.data.user_id,
        username: payload.data.username,
        loading: false
      }

    case `${REQUEST_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${REQUEST_LOGIN}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        loading: false
      }
    case `${REQUEST_LOGIN}_REJECTED`:
      console.log("Rejected logged In!");
      return {
        ...state,
        loading: false
      }

    case `${GET_SESSION}_PENDING`:
      return {
        ...state,
        loading: true
      }
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        username: payload.data.username,
        loading: false
      }

    default: return state
  }
}