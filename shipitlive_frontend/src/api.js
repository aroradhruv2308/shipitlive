import axios from 'axios';
import { VITE_STRAPI_API_BASE_URL, VITE_STRAPI_API_TOKEN } from './config.js';
// Base API configuration
const apiClient = axios.create({
  baseURL: VITE_STRAPI_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${VITE_STRAPI_API_TOKEN}`,
  },
});

// Helper function to fetch data
export const fetchContent = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default apiClient;
