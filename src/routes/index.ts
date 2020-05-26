import * as express from "express";
import SampleRoutes from "./sampleRoutes";
import BaseRoutes from "./baseRoutes";

export class AppRoutes {
  public Routes(app): void {
    app.use("/", BaseRoutes);
    app.use("/sample", SampleRoutes);
  }
}
