import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["Admin", "Waiter", "Chef"],
        default: "Waiter"
    },
    salary: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
    }
});

export const User = mongoose.model("User", UserSchema);