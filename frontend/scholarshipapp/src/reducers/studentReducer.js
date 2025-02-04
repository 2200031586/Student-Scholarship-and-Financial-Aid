
import {
    FETCH_STUDENTS_REQUEST,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    students: [],
    loading: false,
    error: null,
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STUDENTS_REQUEST:
        return { ...state, loading: true };
      case FETCH_STUDENTS_SUCCESS:
        return { ...state, students: action.payload, loading: false };
      case FETCH_STUDENTS_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default studentReducer;
  