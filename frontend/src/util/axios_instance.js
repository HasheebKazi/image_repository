import axios from 'axios';

const axiosServerinstance = axios.create({
    baseURL: 'https://localhost:4000'
});

export default axiosServerinstance;