import axios from "axios";

export function baseRestServiceFactory() {
  let baseUrl = "https://localhost:7249/"; //TODO: use configuration?
  const instance = axios.create({ baseURL: baseUrl });
  return instance;
}

export const baseRestServiceInstance = baseRestServiceFactory();
