import HttpStatusCodes from "http-status-codes";

export type ErrorResponse = {
  status: number;
  message: string;
};

export abstract class CustomError extends Error {
  public readonly status = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, status: number) {
    super(msg);
    this.status = status;
  }
}

export class ParamInvalidError extends CustomError {
  public static readonly Msg = "One or more of the required was missing " + "or invalid.";
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor() {
    super(ParamInvalidError.Msg, ParamInvalidError.HttpStatus);
  }
}

export class ValidatorFnError extends CustomError {
  public static readonly Msg = "Validator function failed. function name: ";
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(fnName: string) {
    super(ValidatorFnError.Msg + fnName, ValidatorFnError.HttpStatus);
  }
}

export class UserNotFoundError extends CustomError {
  public static readonly Msg = "A user with the given id does not exists " + "in the database.";
  public static readonly HttpStatus = HttpStatusCodes.NOT_FOUND;

  constructor() {
    super(UserNotFoundError.Msg, UserNotFoundError.HttpStatus);
  }
}

export class UnauthorizedError extends CustomError {
  public static readonly Msg = "Login failed";
  public static readonly HttpStatus = HttpStatusCodes.UNAUTHORIZED;

  constructor() {
    super(UnauthorizedError.Msg, UnauthorizedError.HttpStatus);
  }
}
