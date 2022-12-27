const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require('./routes/userRoutes');



const app= express();
dotenv.config();
connectDB();


// get request
app.get('/', (req,res) => {
    res.send("API is running Successfully");
})

app.use('/api/user', userRoutes)


const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server is running on ${PORT}`.yellow.bold));
