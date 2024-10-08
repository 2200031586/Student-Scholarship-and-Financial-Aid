import {
    FETCH_SCHOLARSHIPS_REQUEST,
    FETCH_SCHOLARSHIPS_SUCCESS,
    FETCH_SCHOLARSHIPS_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    scholarships: [],
    loading: false,
    error: null,
  };
  
  const scholarshipReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SCHOLARSHIPS_REQUEST:
        return { ...state, loading: true };
      case FETCH_SCHOLARSHIPS_SUCCESS:
        return { ...state, scholarships: action.payload, loading: false };
      case FETCH_SCHOLARSHIPS_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default scholarshipReducer;
  