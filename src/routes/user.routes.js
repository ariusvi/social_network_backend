import { Router } from "express";
import { getUsers, updateUsersProfile } from "../controllers/user.controller.js";
import { getUserProfile } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { isSuperAdmin } from "../middleware/isSuperAdmin.middleware.js";


const router = Router();

router.get('/', auth, isSuperAdmin, getUsers)
router.get ('/profile', auth, getUserProfile)
router.put('/profile', auth, updateUsersProfile) 


export default router;