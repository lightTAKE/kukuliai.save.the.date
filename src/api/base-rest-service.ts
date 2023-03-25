import axios from "axios";

export function baseRestServiceFactory() {
  let baseUrl = process.env.REACT_APP_KUKULIAI_REST_API_BASE; //TODO: use configuration?
  const instance = axios.create({ baseURL: baseUrl });
  return instance;
}

export const baseRestServiceInstance = baseRestServiceFactory();
