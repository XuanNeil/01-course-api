export default {
  nodeEnv: process.env.NODE_ENV || "",
  port: process.env.PORT || 3001,
  saltRounds: process.env.SALT_ROUNDS || 10,
  jwt: {
    access_token_key: process.env.ACCESS_TOKEN_KEY || "ACCESS_SECRET_KEY",
    refresh_token_key: process.env.REFRESH_TOKEN_KEY || "REFRESH_SECRET_KEY",
    options_access: { expiresIn: process.env.ACCESS_TOKEN_LIFE || "24h" },
    options_refresh: { expiresIn: process.env.REFRESH_TOKEN_LIFE || "24h" },
  },
} as const;
