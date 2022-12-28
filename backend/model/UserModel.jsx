const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    pic: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jp"
    },
}, {
    timestamps: true,
})

const User = mongoose.model("User", UserSchema);

module.exports = User;