import "express-async-errors";
import morgan from "morgan";
import helmet from "helmet";
import StatusCodes from "http-status-codes";
import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

import logger from "jet-logger";
import { NodeEnvs } from "./contants/node_envs";

// env configs
dotenv.config();
import env_vars from "./contants/env_vars";
import { CustomAPIError } from "./errors/custom-api";

// **** Init express **** //
const app = express();

// Common middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routers called in console during development
if (env_vars.nodeEnv === NodeEnvs.Dev) {
  const swaggerDocument = YAML.load("./swagger.yaml");
  app.use(morgan("dev"));
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// Security
if (env_vars.nodeEnv === NodeEnvs.Production) {
  app.use(helmet());
}

// **** Add API routers **** //

// Add APIs
// app.use("/api/v1");

// Setup error handler
app.use((err: Error | CustomAPIError, _: Request, res: Response, __: NextFunction) => {
  logger.err(err, true);
  // Status
  const status = err instanceof CustomAPIError ? err.statusCode : StatusCodes.BAD_REQUEST;
  // Return
  return res.status(status).json({
    error: err.message,
  });
});

// **** Export default **** //

export default app;
