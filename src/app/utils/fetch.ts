import axios from 'axios';
import handleError from './handleError';
import config from '../config';

export async function getData(url: any, params: any) {
    try {
        const { token } = localStorage.getItem('auth')
            ? JSON.parse(localStorage.getItem('auth') || "")
            : {};

        return await axios.get(`${config.api_host_dev}${url}`, {
            params,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (err) {
        return handleError(err);
    }
}

export async function postData(url: any, payload: any, formData: any) {
    try {
        const { token } = localStorage.getItem('auth')
            ? JSON.parse(localStorage.getItem('auth') || "")
            : {};

        return await axios.post(`${config.api_host_dev}${url}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': formData ? 'multipart/form-data' : 'application/json',
            },
        });
    } catch (err) {
        return handleError(err);
    }
}

export async function putData(url: any, payload: any) {
    try {
        const { token } = localStorage.getItem('auth')
            ? JSON.parse(localStorage.getItem('auth') || "")
            : {};

        return await axios.put(`${config.api_host_dev}${url}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (err) {
        return handleError(err);
    }
}

export async function deleteData(url: any) {
    try {
        const { token } = localStorage.getItem('auth')
            ? JSON.parse(localStorage.getItem('auth') || "")
            : {};

        return await axios.delete(`${config.api_host_dev}${url}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (err) {
        return handleError(err);
    }
}
