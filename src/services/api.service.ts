import axios, { AxiosRequestConfig } from 'axios';
import { Storage, StorageKeys } from '../utils';

interface ConfigTypes extends AxiosRequestConfig {
    token?: string;
    contentType?: string;
}

export interface ApiResponse {
    success: boolean;
    payload: any;
    message: string;
}

const apiRequest = async (config?: ConfigTypes) => {
    try {
        const token = Storage.getItem(StorageKeys.UserToken) || '';

        const res = await axios({
            url: config?.url,
            baseURL: `${import.meta.env.VITE_API_URL}/api`,
            method: config?.method,
            headers: {
                Accept: config?.contentType || 'application/json',
                'Content-Type': config?.contentType || 'application/json',
                Authorization: `Bearer ${token}`,
            },
            data: config?.data,
            params: config?.params,
        });

        return res.data as ApiResponse;
    } catch (error) {
        const { message, response } = error
        throw new Error(
            response?.data?.message || message || error
        )
    }
};

export default apiRequest;
