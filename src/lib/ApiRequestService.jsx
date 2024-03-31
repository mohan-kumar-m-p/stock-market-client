import { isObject } from "lodash";
import each from "lodash/each";
import mergeWith from "lodash/mergeWith";

const controller = new AbortController();

const signal = controller.signal;

const prepareParams = (params) => {
  let t = {};
  each(params, (e, k) => {
    t[k] = isObject(e) ? JSON.stringify(e) : e;
  });
  return new URLSearchParams(t);
};

const attachParamsToUrl = (url, params) => {
  if (Object.keys(params || {}).length > 0) {
    return url + "?" + prepareParams(params).toString();
  } else {
    return url;
  }
};

const getCall = (url, params, config) => {
  console.log("GET--", attachParamsToUrl(url, params));
  return fetch(attachParamsToUrl(url, params), {
    signal,
    method: "GET",
    ...config,
  });
};

const postCall = (url, params, config, ignoreStringify) => {
  console.log("POST--", url, JSON.stringify(params));
  return fetch(url, {
    signal,
    method: "POST",
    body: ignoreStringify ? params : JSON.stringify(params),
    ...config,
  });
};

const putCall = (url, params, config) => {
  console.log("PUT--", url, JSON.stringify(params));
  return fetch(url, {
    signal,
    method: "PUT",
    body: JSON.stringify(params),
    ...config,
  });
};

class ApiRequestService {
  static async request(
    url,
    params,
    method,
    config,
    ignoreStringify = false,
    isUpload = true,
    responseType = false,
    contentType = false,
    bufferData = false
  ) {
    const m = (method || "get").toLowerCase();
    let defaultConfig = {
      headers: {
        loginType: "ERPLOGIN",
        configKey: "dsddsdsd",
      },
    };
    if (isUpload) {
      defaultConfig.headers["Content-Type"] = "application/json";
    }

    const tkn = await localStorage.getItem("token");
    if (tkn) {
      defaultConfig.headers.authorization = "JWT " + tkn;
    } else {
      if (!params.username) {
        window.location.reload();
      }
    }
    if (responseType) {
      defaultConfig["responseType"] = responseType;
    }
    if (contentType) {
      defaultConfig.headers["Content-Type"] = contentType;
    }
    let c = mergeWith({}, defaultConfig, config || {});

    let req;
    switch (m) {
      case "get":
        req = await getCall(url, params, c);
        break;
      case "post":
        req = await postCall(url, params, c, ignoreStringify);
        break;
      case "put":
        req = await putCall(url, params, c);
        break;
      default:
        req = await getCall(url, params, c);
    }

    try {
      if (req.status === 440) {
        await localStorage.setItem("token", "");
        window.location.reload();
        // return <Login/>
        //controller.abort();

      }
      if (bufferData) {
        return await req.arrayBuffer();
      }
      return await req.json();
    } catch (error) {
      return error;
    }
  }
}

export default ApiRequestService;
