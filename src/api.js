import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-demon-slayer.vercel.app/'
});

export default api;