import mongoose,{Schema} from "mongoose";

const TicketSchema = new mongoose.Schema(
    {
        //id: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String },
        status:{type: String, enum:["Open","In-progress","Resolved","Closed"]},
        priority:{type: String, enum:["High", "Medium", "Low"],default:"Low"},
        assigned_to: {type: Schema.Types.ObjectId,ref:"user", required: true},
        reporter:{type: Schema.Types.ObjectId,ref:"user", required: true},
        comments:{type:[String]},
        attachments:{type:[String]},
        category :{type: String},
        tags: {type: String} // Comma-separated values


    },
    { timestamps: true }
);

export default mongoose.models.ticket ||
    mongoose.model("ticket", TicketSchema);