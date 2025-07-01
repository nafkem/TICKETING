import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["All", "Politics", "Sport", "Health"],
      default: "All",
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.category ||
  mongoose.model("category", CategorySchema);
