import axios from 'axios';

const scholarshipApi = {
  fetchScholarships: async () => {
    const response = await axios.get('/api/scholarships');
    return response.data;
  },
  createScholarship: async (data) => {
    const response = await axios.post('/api/scholarships', data);
    return response.data;
  },
  updateScholarship: async (id, data) => {
    const response = await axios.put(`/api/scholarships/${id}`, data);
    return response.data;
  },
  deleteScholarship: async (id) => {
    const response = await axios.delete(`/api/scholarships/${id}`);
    return response.data;
  },
};

export default scholarshipApi;
