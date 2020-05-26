import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const SampleSchema = new Schema(
  {
    firstName: {
      type: String,
      required: "Enter a first name",
    },
    lastName: {
      type: String,
      required: "Enter a first name",
    },
    email: {
      type: String,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);
