import { Router } from "express";
import { deleteUserById, getUsers, updateUsersProfile } from "../controllers/user.controller.js";
import { getUserProfile } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { isSuperAdmin } from "../middleware/isSuperAdmin.middleware.js";
import { getPostByUserId } from "../controllers/post.controller.js";


const router = Router();

router.get('/', auth, isSuperAdmin, getUsers)
router.get ('/profile', auth, getUserProfile)
router.put('/profile', auth, updateUsersProfile) 
router.get('/posts/:userId', auth, getPostByUserId)
router.delete('/:_id', auth, isSuperAdmin, deleteUserById)


export default router;