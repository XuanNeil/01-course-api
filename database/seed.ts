import dotenv from "dotenv";
import { DBConnect, DBDisconnect, load } from "./index";

dotenv.config();

DBConnect().then(async () => {
  await load();

  await DBDisconnect();
});
