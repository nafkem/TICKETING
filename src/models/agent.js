import mongoose,{Schema}from "mongoose";

const AgentSchema = new mongoose.Schema(
    {
                //id: { type: ObjectId, ref:"user", required: true},
                department: { type: String, required: true }, 
                ticket_owner:{type:Schema.Types.ObjectId, ref:"user", required: true},      
            },
            { timestamps: true }
        );
        
        export default mongoose.models.agent ||
            mongoose.model("agent", AgentSchema);

