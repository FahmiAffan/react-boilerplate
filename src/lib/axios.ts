import { useCookies } from 'react-cookie';
import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const [cookies, setCookies] = useCookies(['token'])


console.log(baseURL)

const api = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: { 'X-ACCESS-TOKEN': '' },
});

api.interceptors.response.use((response) => {
    if (response.data.accessToken) {
        setCookies('token', response?.data?.accessToken);
    }

    return response;
});
export default api
