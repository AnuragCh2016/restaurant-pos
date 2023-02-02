import mongoose from "mongoose";
const {Schema} = mongoose;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

export const Item = mongoose.model("Item", ItemSchema);