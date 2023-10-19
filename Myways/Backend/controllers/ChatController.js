const ChatMessage = require('../models/ChatMessage');


exports.createMessage = async (req, res) => {
  try {
    const { text, user } = req.body;
    const message = new ChatMessage({ text, user });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Message creation failed' });
  }
};


exports.getAllMessages = async (req, res) => {
  try {
    const messages = await ChatMessage.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
