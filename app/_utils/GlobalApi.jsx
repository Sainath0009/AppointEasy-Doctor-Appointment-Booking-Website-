const axios = require("axios"); // Import axios

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
});

const getCategory = () => axiosClient.get('categories?populate=*');
const getDoctorList = () => axiosClient.get('doctors?populate=*');
const getDoctorsByCategory = (category) => axiosClient.get('/doctors?filters[categories][Name][$eq]='+ category + '&populate=*');


module.exports = {
    getCategory,
    getDoctorList,
    getDoctorsByCategory
};
