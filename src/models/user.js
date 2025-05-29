import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
                //id: { type: Number, required: true },
                name: { type: String, required: true },
                email: { type: String,  required:true,unique:true },
                password:{type: String, required:true},
                role:{type: String, enum:["Agent", "User", "Admin"],default:"User"},    
        
            },
            { timestamps: true }
        );
        
        export default mongoose.models.user ||
            mongoose.model("user", UserSchema);



