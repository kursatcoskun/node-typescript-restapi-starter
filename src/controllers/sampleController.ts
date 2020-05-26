import * as mongoose from "mongoose";
import { SampleSchema } from "../models/sampleModel";
import { Response, Request } from "express";
import { ResponseModel } from "../utils/ResponseModel";

const SampleModel = mongoose.model("Sample", SampleSchema);

export class SampleController {
  public addNewSample(req: Request, res: Response) {
    let newSample = new SampleModel(req.body);

    newSample.save((err, sample) => {
      err
        ? res.json(new ResponseModel(null, "500"))
        : res.json(new ResponseModel(sample, "200"));
    });
  }

  public getAllSamples(req: Request, res: Response) {

    SampleModel.find({},(err, sample) => {
      err
          ? res.json(new ResponseModel(null, "500"))
          : res.json(new ResponseModel(sample, "200"));
    });
  }
}
