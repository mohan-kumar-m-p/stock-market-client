import { API_ENDPOINT, API_VERSION } from "../../constant";
import AjaxService from "./AjaxService";
import StorageService from "./StorageService";


class AuthService {

  static doStaffLogin(params) {
    return AjaxService.request(
      API_ENDPOINT + "api/" + API_VERSION + "/staff/login",
      params,
      'POST'
    );
  }

  static updateStaffSession(params) {
    return AjaxService.request(
      API_ENDPOINT + "api/" + API_VERSION + "/staff/updatesessionoutlet",
      params,
      'PUT'
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