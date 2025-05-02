import express from 'express';
import { Login, Logout, onBoarding, Signup } from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';


const router=express.Router();
router.post("/signup",Signup);
router.post("/login",Login);
router.post("/logout",Logout);

router.post("/onboarding",protectRoute, onBoarding);

router.get("/me",protectRoute,(req,res)=>{
    res.status(200).json({succes: true,user:req.user});
})

export default router;