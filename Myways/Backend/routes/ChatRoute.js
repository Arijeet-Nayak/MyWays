const express = require('express');
const router = express.Router();

const ChatController = require('../controllers/ChatController');


router.post('/messages', ChatController.createMessage);


router.get('/messages', ChatController.getAllMessages);

module.exports = router;
