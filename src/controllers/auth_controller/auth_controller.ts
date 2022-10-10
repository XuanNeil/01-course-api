import { TAuthControllerLoginRequest, TAuthControllerLoginResponse } from "./models/auth";
import { credentialRepository } from "../../repositories/repositories";
import HttpStatusCodes from "http-status-codes";
import { comparePassword } from "../../libs/bcrypt";
import { signAccessToken, signRefreshToken } from "../../libs/jwt/jwt";

export class AuthController {
  async login(req: TAuthControllerLoginRequest, res: TAuthControllerLoginResponse) {
    const { email, password } = req.body;

    const credential = await credentialRepository.detail({ email });

    if (!credential) {
      res.json({ status: HttpStatusCodes.NOT_FOUND, message: "Email not found!" });
    }

    const { password: hasPassword, ...resetCredential } = credential;
    const isMatch = comparePassword(password, hasPassword);

    if (!isMatch) {
      res.json({ status: HttpStatusCodes.UNAUTHORIZED, message: "Password error" });
    }

    const access_token = signAccessToken(resetCredential);
    const refresh_token = signRefreshToken({ id: resetCredential.id });

    res.status(200).json({
      credential: {
        access_token,
        refresh_token,
      },
    });
  }
}
