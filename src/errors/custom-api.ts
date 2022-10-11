import HttpStatusCodes from "http-status-codes";

export class CustomAPIError extends Error {
  public readonly statusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
