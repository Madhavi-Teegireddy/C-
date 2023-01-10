
const asyncHandler = require("express-async-handler");
const Message = require("../model/MessageModel")



const sendMessage = asyncHandler(async(req,res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
};

try{
    var message = await Message.create
}catch(error){}
})

module.exports = {
    sendMessage
}