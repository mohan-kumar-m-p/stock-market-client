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

}

export default CompanyService;