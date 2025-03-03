import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name: {
        required: true,
        type: stringify,
    },
    password: {
        required: true,
        type: stringify,
    },
    email: {
        required: true,
        type: stringify,
    },
})