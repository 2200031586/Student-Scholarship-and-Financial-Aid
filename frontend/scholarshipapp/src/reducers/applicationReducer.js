import {
    SUBMIT_APPLICATION_REQUEST,
    SUBMIT_APPLICATION_SUCCESS,
    SUBMIT_APPLICATION_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    application: {},
    loading: false,
    error: null,
  };
  
  const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_APPLICATION_REQUEST:
        return { ...state, loading: true };
      case SUBMIT_APPLICATION_SUCCESS:
        return { ...state, application: action.payload, loading: false };
      case SUBMIT_APPLICATION_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default applicationReducer;
  