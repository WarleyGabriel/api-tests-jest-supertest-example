import axios from 'axios';

class Postman {
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

export const postman = new Postman();
