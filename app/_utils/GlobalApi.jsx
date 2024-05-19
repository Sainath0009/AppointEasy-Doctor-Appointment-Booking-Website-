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
const getDoctors = () => {
    return axios.get(`${API_BASE_URL}/doctors`);
};



const getDoctorById = (id) => axiosClient.get('/doctors/' + id + '?populate=*');

module.exports = {
    getCategory,
    getDoctorList,
    getDoctors,
    getDoctorById
};
