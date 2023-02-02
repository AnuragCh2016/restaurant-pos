import mongoose from "mongoose";
const {Schema} = mongoose;

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: /^\w+@\w+\.\w+$/,
        required: true
    },
    phone: {
        type: String,
        match: /^\d{10}$/,
        required: true
    }
}, {timestamps: true});

export const Customer = mongoose.model("Customer", CustomerSchema);