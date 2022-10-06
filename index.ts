import logger from "jet-logger";
import server from "src/app";
import env_vars from "src/contants/env_vars";

// Constants
const port = env_vars.port;

// Start server
server.listen(port, async () => {
  logger.info("Express server started on port: " + port);
});
