import { API_ENDPOINT, API_VERSION } from "../../constant";
import AjaxService from "./AjaxService";
import StorageService from "./StorageService";


class AuthService {

  static doStaffLogin(params) {
    console.log("params", params);
    return AjaxService.request(
      API_ENDPOINT + "/api/" + API_VERSION + "/auth/admin/login",
      params,
      'POST'
    );
  }

  static createStaff(params) {
    return AjaxService.request(
      API_ENDPOINT + "/api/" + API_VERSION + "/admin/create",
      params,
      'POST'
    );
  }

  static setToken(value) {
    StorageService.set('t', value);
  }

  static getToken() {
    return StorageService.get('t') || '';
  }

  static setUser(value) {
    StorageService.set('u', value);
  }

  static getUser() {
    return StorageService.get('u') || {};
  }

  static clearUser() {
    StorageService.remove('u');
  }

}

export default AuthService;