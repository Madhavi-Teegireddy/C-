const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
    name: { type: String, req: true},
    email: { type: String, req: true, unique: true },
    password: { type: String, req: true},
    pic: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jp"
    },
}, {
    timestamps: true,
})

const User = mongoose.model("User", UserSchema);

module.exports = User;