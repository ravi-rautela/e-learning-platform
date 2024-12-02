import axios from 'axios';

// Create an instance of axios with default configurations
const API = axios.create({
    baseURL: 'http://localhost:5000/api',  // Adjust this URL based on your backend API
    headers: {
        'Content-Type': 'application/json',
    },
});

// Set the authorization token if the user is logged in
API.interceptors.request.use(
    (config) => {
        const userInfo = JSON.parse(localStorage.getItem('user')); // Assuming user is saved in localStorage
        if (userInfo && userInfo.token) {
            config.headers.Authorization = `Bearer ${userInfo.token}`;
        }
        console.log('Authorization Header:', config.headers.Authorization);

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;
