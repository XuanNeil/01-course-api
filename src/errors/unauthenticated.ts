import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "./custom-api";

export class UnauthenticatedError extends CustomAPIError {
  public static readonly StatusCode = StatusCodes.UNAUTHORIZED;

  constructor(message: string) {
    super(message, UnauthenticatedError.StatusCode);
  }
}
