import axios from 'axios';
import AuthService from './AuthService';

class AjaxService {

  static prepareParams(params) {
    const keys = Object.keys(params || {});
    let t = {};
    keys.forEach((x) => {
      const p = typeof params[x];
      t[x] = p == "object" && p != null ? JSON.stringify(params[x]) : params[x];
    });
    return t;
  }

  static async request(url, params, method = 'GET', config = {}) {
    try {
      let defaultConfig = {
        headers: {
          "Content-Type": "application/json",
        }
      }

      const t = AuthService.getToken();
      if (t) {
        defaultConfig.headers.Authorization = 'JWT ' + t;
      }

      const r = await axios({
        url: url,
        method,
        data: ['put', 'post'].indexOf(method.toLowerCase()) != -1 ? params : {},
        params: ['put', 'post'].indexOf(method.toLowerCase()) == -1 ? this.prepareParams(params) : {},
        ...defaultConfig,
        ...config,
      });
      return {success: r.success,status: r.status, resp: r.data };
    } catch (error) {
      return { success: false, status: axios.isAxiosError(error) ? error.response?.status || -1 : -1, resp: axios.isAxiosError(error) ? error.response?.data : null };
    }
  }
}

export default AjaxService;