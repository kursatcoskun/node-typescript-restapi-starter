import * as express from "express";
import { SampleController } from "../controllers";

const SampleRoutes = express.Router();

const sampleCtrl: SampleController = new SampleController();

SampleRoutes.post("/add", sampleCtrl.addNewSample);
SampleRoutes.get("/all", sampleCtrl.getAllSamples);

export default SampleRoutes;
