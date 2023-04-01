import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { RespondPleaseRequest } from "../api/models/RespondPleaseRequest";
import { RespondPleaseRestService } from "../api/respond-please-rest-service";

export default function useRespond() {
  return useMutation<void, AxiosError, RespondPleaseRequest>((request) =>
    RespondPleaseRestService.rsvp(request)
  ).mutateAsync;
}
