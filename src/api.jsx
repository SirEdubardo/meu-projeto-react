// src/api.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'tvhqbf-44321.brs.devtunnels.ms', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
