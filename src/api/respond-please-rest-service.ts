import { baseRestServiceInstance } from "./base-rest-service";
import { RespondPleaseRequest } from "./models/RespondPleaseRequest";
import { RespondPleaseResponse } from "./models/RespondPleaseResponse";

export class RespondPleaseRestService {
  private static restApiBase = "rsvp-restapi";

  public static getAllRsvps = async (): Promise<RespondPleaseResponse[]> => {
    const response = await baseRestServiceInstance.get<RespondPleaseResponse[]>(
      `${RespondPleaseRestService.restApiBase}/all`
    );
    return response.data;
  };

  public static rsvp = async (request: RespondPleaseRequest): Promise<void> => {
    await baseRestServiceInstance.post(
      `${RespondPleaseRestService.restApiBase}/respond`,
      request
    );
  };
}
