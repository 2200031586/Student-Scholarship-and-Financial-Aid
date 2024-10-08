import { SUBMIT_APPLICATION_REQUEST, SUBMIT_APPLICATION_SUCCESS, SUBMIT_APPLICATION_FAILURE } from './types';
import axios from 'axios';

export const submitApplication = (data) => async (dispatch) => {
  dispatch({ type: SUBMIT_APPLICATION_REQUEST });
  try {
    const response = await axios.post('/api/applications', data);
    dispatch({ type: SUBMIT_APPLICATION_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SUBMIT_APPLICATION_FAILURE, payload: error.message });
  }
};

