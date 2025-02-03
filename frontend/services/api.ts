// frontend/services/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const productAPI = {
    // Get all products
    getProducts: () => api.get('/products'),
    // Add more product-related API calls here
};

export default api;