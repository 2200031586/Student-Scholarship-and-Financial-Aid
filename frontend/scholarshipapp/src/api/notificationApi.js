import axios from 'axios';

const notificationApi = {
  fetchNotifications: async () => {
    const response = await axios.get('/api/notifications');
    return response.data;
  },
  createNotification: async (data) => {
    const response = await axios.post('/api/notifications', data);
    return response.data;
  },
  updateNotification: async (id, data) => {
    const response = await axios.put(`/api/notifications/${id}`, data);
    return response.data;
  },
  deleteNotification: async (id) => {
    const response = await axios.delete(`/api/notifications/${id}`);
    return response.data;
  },
};

export default notificationApi;
