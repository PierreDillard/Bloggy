import axios from "axios";
import jwt_decode from "jwt-decode";

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

api.interceptors.response.use(response => {

   /*  On vérifie, qu'il  y a un token, présent et on le décode grâce à jwt-decode */
  const token = response.headers["x-auth-token"];
  if (token) {
    const decoded = jwt_decode(token);
    response.data.user = decoded;
  }
  return response;
});

export default api;