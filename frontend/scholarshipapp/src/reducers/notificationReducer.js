import {
    FETCH_NOTIFICATIONS_REQUEST,
    FETCH_NOTIFICATIONS_SUCCESS,
    FETCH_NOTIFICATIONS_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    notifications: [],
    loading: false,
    error: null,
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_REQUEST:
        return { ...state, loading: true };
      case FETCH_NOTIFICATIONS_SUCCESS:
        return { ...state, notifications: action.payload, loading: false };
      case FETCH_NOTIFICATIONS_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  