import { API_ENDPOINT, API_VERSION } from "../../constant";
import AjaxService from "./AjaxService";


class CompanyService {

  static createCompany(params) {
    return AjaxService.request(
        API_ENDPOINT + "/api/" + API_VERSION + "/stockmarket/company/create",
      params,
      'POST'
    );
  }

  static getCompanyList(params) {
    return AjaxService.request(
      API_ENDPOINT + "/api/" + API_VERSION + "/stockmarket/company/list",
      params,
    );
  }

  static getCompanyDetails(params, id) {
    return AjaxService.request(
      API_ENDPOINT + "/api/" + API_VERSION + "/stockmarket/company/view/"+id,
      params,
    );
  }

  static createOHLCV(params) {
    return AjaxService.request(
        API_ENDPOINT + "/api/" + API_VERSION + "/stockmarket/ohlcv/create",
      params,
      'POST'
    );
  }

  static getOHLCVList(params) {
    return AjaxService.request(
      API_ENDPOINT + "/api/" + API_VERSION + "/stockmarket/ohlcv/list",
      params,
    );
  }

  static getOHLCVDetails(params, id) {
    return AjaxService.request(
      API_ENDPOINT + "/api/" + API_VERSION + "/stockmarket/ohlcv/view/"+id,
      params,
    );
  }

}

export default CompanyService;