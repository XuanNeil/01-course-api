import jwt from "jsonwebtoken";
import { ICredentialDocument } from "database/models";
import env_vars from "../../contants/env_vars";

interface IAccessTokenPayload extends Omit<ICredentialDocument, "password"> {}

export interface IRefreshTokenPayload {
  id: string;
}

export function signAccessToken(payload: IAccessTokenPayload): string {
  return jwt.sign({ payload }, env_vars.jwt.access_token_key, env_vars.jwt.options_access);
}

export function signRefreshToken(payload: IRefreshTokenPayload): string {
  return jwt.sign({ payload }, env_vars.jwt.refresh_token_key, env_vars.jwt.options_refresh);
}
