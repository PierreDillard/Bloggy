import axios from "axios";
// import jwt_decode from "jwt-decode";

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export default api;