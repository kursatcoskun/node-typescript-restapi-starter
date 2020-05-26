import app from "./app";
import { APP_PORT } from "./config/index";

app.listen(APP_PORT, () => {
  app.get("env");
});
