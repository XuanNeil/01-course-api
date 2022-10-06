export default {
  nodeEnv: process.env.NODE_ENV || "",
  port: process.env.PORT || 3001,
  jwt: {
    secret: process.env.JWT_SECRET ?? "",
  },
} as const;
