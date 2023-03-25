import { useQuery } from "@tanstack/react-query";
import { RespondPleaseResponse } from "../api/models/RespondPleaseResponse";
import { RespondPleaseRestService } from "../api/respond-please-rest-service";

export function useRsvps() {
  return useQuery<RespondPleaseResponse[]>(["use-rsvps"], () =>
    RespondPleaseRestService.getAllRsvps()
  );
}

export default useRsvps;
