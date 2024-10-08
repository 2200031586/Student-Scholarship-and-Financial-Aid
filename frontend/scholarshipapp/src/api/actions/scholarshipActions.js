import { FETCH_SCHOLARSHIPS_REQUEST, FETCH_SCHOLARSHIPS_SUCCESS, FETCH_SCHOLARSHIPS_FAILURE } from './types';
import axios from 'axios';

export const fetchScholarships = () => async (dispatch) => {
  dispatch({ type: FETCH_SCHOLARSHIPS_REQUEST });
  try {
    const response = await axios.get('/api/scholarships');
    dispatch({ type: FETCH_SCHOLARSHIPS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_SCHOLARSHIPS_FAILURE, payload: error.message });
  }
};
