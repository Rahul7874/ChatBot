const Chat = require("../models/chatModel");

// Controller to handle user queries
exports.postMessage = async (req, res) => {
  const userQuery = req.body.query.toLowerCase();

  try {
    const chatEntry = await Chat.find({
      $or: { quetion: { '$regex': userQuery } },
    });
    if (chatEntry) {
      res.json({ answer: chatEntry.answer });
    } else {
      res.json({ answer: "Sorry, I don't have an answer for that question." });
    }
  } catch (error) {
    console.error("Error finding answer:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.addMessage = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newChatEntry = await Chat.create({ question, answer });
    res.status(201).json(newChatEntry);
  } catch (error) {
    console.error("Error adding new entry:", error);
    res.status(500).json({ error: "Server error" });
  }
};
