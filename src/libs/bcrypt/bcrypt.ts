import bcrypt from "bcrypt";
import env_vars from "../../contants/env_vars";

export const hashPassword = (password: string): string => bcrypt.hashSync(password, env_vars.saltRounds);

export const comparePassword = (password: string, hashPassword: string): boolean =>
  bcrypt.compareSync(password, hashPassword);

export const hasAsyncPassword = (password: string): void =>
  bcrypt.hash(password, env_vars.saltRounds, (err, hash) => {
    return hash;
  });

export const compareAsyncPassword = (password: string, hasPassword: string): void =>
  bcrypt.compare(password, hasPassword, (err, result) => {
    return result;
  });
