
const asyncHandler = require("express-async-handler");
const User = require("../model/UserModel");


const registerUser = asyncHandler(async () => {
    const {name, email, password, pic} = req.body

    if(!name || !email || !password){
        resizeBy.status(400);
        throw new Error("Please Enter all the details");
    }

    const userExists = await User;
})