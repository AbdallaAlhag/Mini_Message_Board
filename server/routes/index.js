// routes/index.js
import express from "express";
import messageController from "../controllers/messageController.js";
const router = express.Router();

// GET home page, display messages
router.get('/', messageController.getMessages);

// GET new message form
router.get('/new', messageController.newMessageForm);

// POST new message
router.post('/new', messageController.addNewMessage);

export default router;
