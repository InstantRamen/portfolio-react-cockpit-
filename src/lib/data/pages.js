// const { API_KEY, API_URL } = process.env;
import axios from 'axios';
const { REACT_APP_API_KEY: API_KEY, REACT_APP_API_URL: API_URL } = process.env;
export class Pages {
  static async getPages() {
    const res = await this.get('/collections/get/Page');
    const pages = res.data;
    return pages;
  }

  static async getPage() {}

  // This is basically just an abstraction over axios.get()
  // Since most requests will look almost exactly alike,
  // I figured this would make the code a bit cleaner.
  static async get(endpointUri = '/', options = '') {
    return await axios.get(
      `${API_URL}${endpointUri}?token=${API_KEY}&${options}`
    );
  }
}
