import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://mogobafacebook.herokuapp.com/api',
});
export default axiosInstance;
