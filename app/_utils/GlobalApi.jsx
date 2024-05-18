const axios = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
});

const getCategory = () => axiosClient.get('categories?populate=*');
const getDoctorList = () => axiosClient.get('doctors?populate=*');

// Modify getDoctorsByCategory to accept an additional parameter for search query
const getDoctorsByName = (searchQuery) => {
    
    
    // If search query is provided, include it in the API call
    if (searchQuery) {
        apiUrl += '&_q=' + encodeURIComponent(searchQuery);
    }

    return axiosClient.get('doctors?populate=*');
};

const getDoctorById = (id) => axiosClient.get('/doctors/' + id + '?populate=*');

module.exports = {
    getCategory,
    getDoctorList,
    getDoctorsByName,
    getDoctorById
};
