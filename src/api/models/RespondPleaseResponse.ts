import internal from "stream";

export interface RespondPleaseResponse {
  id: number;
  name: string;
  attending: boolean;
  needTransport: boolean;
}
