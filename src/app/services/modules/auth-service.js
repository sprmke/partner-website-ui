import axios from 'axios';

// API Settings
const authInstance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
});

// API Call Types
export const AUTH = {
  post(endpoint, formData) {
    return authInstance.post(endpoint, formData);
  },
  put(endpoint, formData) {
    return authInstance.put(endpoint, formData);
  },
  get(endpoint) {
    return authInstance.get(endpoint);
  },
  delete(endpoint) {
    return authInstance.delete(endpoint);
  }
}

// API Endpoints
export const AUTH_ENDPOINTS = {
  POST_SIGN_UP: ':signUp',
  POST_SIGN_IN: ':signInWithPassword'
}