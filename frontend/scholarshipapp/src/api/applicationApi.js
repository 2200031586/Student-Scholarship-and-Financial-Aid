import axios from 'axios';

const applicationApi = {
  submitApplication: async (data) => {
    const response = await axios.post('/api/applications', data);
    return response.data;
  },
  fetchApplications: async () => {
    const response = await axios.get('/api/applications');
    return response.data;
  },
  updateApplication: async (id, data) => {
    const response = await axios.put(`/api/applications/${id}`, data);
    return response.data;
  },
  deleteApplication: async (id) => {
    const response = await axios.delete(`/api/applications/${id}`);
    return response.data;
  },
};

export default applicationApi;
