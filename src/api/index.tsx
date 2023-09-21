import axios, { AxiosInstance } from 'axios';

export const API_URL = 'http://localhost:3001';

const authToken: string | null = localStorage.getItem('accessToken');

export const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  },
});
