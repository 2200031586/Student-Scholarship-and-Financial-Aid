import axios from 'axios';

const studentApi = {
  fetchStudents: async () => {
    const response = await axios.get('/api/students');
    return response.data;
  },
  createStudent: async (data) => {
    const response = await axios.post('/api/students', data);
    return response.data;
  },
  updateStudent: async (id, data) => {
    const response = await axios.put(`/api/students/${id}`, data);
    return response.data;
  },
  deleteStudent: async (id) => {
    const response = await axios.delete(`/api/students/${id}`);
    return response.data;
  },
};

export default studentApi;
