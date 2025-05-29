import mongoose, {Schema}from "mongoose";

const ArticleSchema = new mongoose.Schema(
    {
        //id: { type: Number, required: true },
        title: { type: String, required: true },
        content: { type: String },
        category_id: {type: Schema.Types.ObjectId,ref:"category", required: true},
        author_id: {type:Schema.Types.ObjectId,ref:"user", required: true},
        

    },
    { timestamps: true }
);

export default mongoose.models.article ||
    mongoose.model("article", ArticleSchema);
