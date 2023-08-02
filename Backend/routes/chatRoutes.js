const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// API endpoint to handle user queries
router.post('/chat', chatController.postMessage);
router.post('/add', chatController.addMessage);

module.exports = router;
