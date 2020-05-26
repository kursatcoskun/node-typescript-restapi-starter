import * as express from "express";
import * as bodyParser from "body-parser";
import * as swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./config";
import { AppRoutes } from "./routes";
import * as mongoose from "mongoose";
import {MONGODB_URI} from "./utils/secrets";

class App {
  public app: express.Application;
  public appRoutes: AppRoutes = new AppRoutes();

  constructor() {
    this.app = express();
    this.connectToMongoDB();
    this.config();
    this.appRoutes.Routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
  }

  private connectToMongoDB() {
    const mongoUrl = MONGODB_URI;

    mongoose.connect(
      `mongodb://${mongoUrl}`,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  },
      (err) => {
        err
          ? console.error(err)
          : console.log("mongodb connection succesfully completed...");
      }
    );
  }
}

export default new App().app;
