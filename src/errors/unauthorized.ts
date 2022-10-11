import HttpStatusCodes, { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "./custom-api";

export class UnauthorizedError extends CustomAPIError {
  public static readonly StatusCode = HttpStatusCodes.FORBIDDEN;

  constructor(message: string) {
    super(message, UnauthorizedError.StatusCode);
  }
}
