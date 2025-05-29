
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
                //id: { type: Number, required: true},
                name: { type: String, required: true },        
            },
            { timestamps: true }
        );
        
        export default mongoose.models.category ||
            mongoose.model("category", CategorySchema);

