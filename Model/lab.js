import mongoose from "mongoose";

const Schema = mongoose.Schema;
const labSchema = new Schema(
  {
    labSelection: { type: String, require: true },
  },
  { timestamps: true }
);

export default mongoose.model("Lab", labSchema, "labs");
