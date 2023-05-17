import mongoose from "mongoose";

export const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        image: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true
    })
);

