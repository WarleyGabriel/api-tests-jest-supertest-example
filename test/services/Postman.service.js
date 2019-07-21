import axios from 'axios';

class PostmanService {
    getInstance() {
        const axiosInstance = axios.create({
            baseURL: 'https://postman-echo.com',
        });
        return axiosInstance;
    }

    async getEchoPostman() {
        const url = '/get';
        return this.getInstance().get(url);
    }
}

export const postmanService = new PostmanService();
