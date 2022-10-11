import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "./custom-api";

export class NotFoundError extends CustomAPIError {
  public static readonly StatusCode = StatusCodes.NOT_FOUND;

  constructor(message: string) {
    super(message, NotFoundError.StatusCode);
  }
}
