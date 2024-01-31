const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema(
{
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
   },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
  },
  status: {
    type: String,
    default: 'unread',
  }
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Message", messageSchema);
