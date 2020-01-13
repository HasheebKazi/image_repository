import axios from 'axios';

const axios_server_instance = axios.create({
    baseURL: 'https://localhost:4000'
});

export default axios_server_instance;