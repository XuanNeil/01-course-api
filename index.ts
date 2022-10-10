import logger from "jet-logger";
import server from "src/app";
import env_vars from "src/contants/env_vars";
import {DBConnect} from "./database";

// Constants
const port = env_vars.port;

// Start server
server.listen(port, async () => {
  await DBConnect();
  logger.info("Express server started on port: " + port);
});
