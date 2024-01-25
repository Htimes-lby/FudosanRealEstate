const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
{
  senderId: {
    type: Schema.Types.objectId,
    ref: 'User',
   },
  receiver: {
    type: Schema.Types.objectId,
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
