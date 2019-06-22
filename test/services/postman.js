import axios from 'axios';

class Postman {
  getBaseUrl() {
    return 'https://postman-echo.com';
  }

  async getEchoPostman() {
    const url = `${this.getBaseUrl()}/get`;
    return axios.get(url);
  }
}

export const postman = new Postman();
