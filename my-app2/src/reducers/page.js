import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
} from '../actions/PageActions'

const initialState = {
  year: 2018,
  photos: [],
  isLoading: false,
  error: '',
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isLoading: true, error: '' }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isLoading: false, error: '' }

    case GET_PHOTOS_FAIL:
      return { ...state, error: action.payload.message, isLoading: false }

    default:
      return state
  }
}