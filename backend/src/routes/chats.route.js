import express from 'express';
import { getStreamToken } from '../controllers/chats.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router=express.Router();

router.get('/token',protectRoute, getStreamToken);

export default router;