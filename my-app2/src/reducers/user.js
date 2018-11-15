import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from '../actions/UserActions'
  
  const initialState = {
    name: '',
    error: '',
    isLoading: false,
  }
  
  export function userReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, isLoading: true, error: '' }
  
      case LOGIN_SUCCESS:
        return { ...state, isLoading: false, name: action.payload }
  
      case LOGIN_FAIL:
        return { ...state, isLoading: false, error: action.payload.message }
  
      default:
        return state
    }
  }