import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "./custom-api";

export class BadRequestError extends CustomAPIError {
  public static readonly StatusCode = StatusCodes.BAD_REQUEST;

  constructor(message: string) {
    super(message, BadRequestError.StatusCode);
  }
}
