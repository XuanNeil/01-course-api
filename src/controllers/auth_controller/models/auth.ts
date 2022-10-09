import { Request, Response } from "express";
import { ErrorResponse } from "../../../contants/errors";

// Login
interface IAuthLoginBody {
  email: string;
  password: string;
}
interface IAuthLoginResponse {
  credential: {
    access_token: string;
    refresh_token: string;
  };
}
export type TAuthControllerLoginRequest = Request<{}, {}, IAuthLoginBody>;

export type TAuthControllerLoginResponse = Response<IAuthLoginResponse | ErrorResponse>;
