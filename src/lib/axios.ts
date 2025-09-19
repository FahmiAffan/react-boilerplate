import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;
const cookie = document.cookie;

const api = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: { 'X-ACCESS-TOKEN': '' },
});

api.interceptors.response.use((response) => {
    console.log(cookie);
    
    if (response.data.accessToken) {
        
    }

    return response;
});
export default api
