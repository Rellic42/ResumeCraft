// Global API Utility

const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:5001/api' 
    : '/api';

/**
 * Wrapper for fetch API to handle authentication and JSON parsing automatically
 * @param {string} endpoint - The API endpoint (e.g., '/auth/login')
 * @param {object} options - Fetch options (method, body, etc.)
 * @returns {Promise<any>} - The JSON response
 */
async function fetchAPI(endpoint, options = {}) {
    const token = localStorage.getItem('resumeCraftToken');
    
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

function logout() {
    localStorage.removeItem('resumeCraftToken');
    localStorage.removeItem('resumeCraftUser');
    window.location.href = 'login.html';
}

function checkAuth() {
    const token = localStorage.getItem('resumeCraftToken');
    if (!token) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function getUser() {
    const userStr = localStorage.getItem('resumeCraftUser');
    if (userStr) {
        return JSON.parse(userStr);
    }
    return null;
}
