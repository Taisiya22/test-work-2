import axios from 'axios';

axios.defaults.baseURL = 'https://6454d767f803f3457632bc22.mockapi.io';

export const fetchAllUsers = async () => {
  const { data } = await axios.get('/usercard');
  return data;
};

 