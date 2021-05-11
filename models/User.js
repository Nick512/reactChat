const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    registerDate: {
        type: Date,
        default: Date.now,
    },

    bio: {
        type: String,
        default: "",
    },

    chatNumber: {
        type: Number,
        default: 0,
    },

    chats: {
        type: Array,
        default: [],
    },
})

module.exports = User = mongoose.model("user", UserSchema)
