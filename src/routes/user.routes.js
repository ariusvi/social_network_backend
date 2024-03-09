import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { getUserProfile } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { isSuperAdmin } from "../middleware/isSuperAdmin.middleware.js";


const router = Router();

router.get('/', auth, isSuperAdmin, getUsers)
router.get ('/profile', auth, getUserProfile)
// router.put('/profile', updateUsersProfile) //todo modificar datos del perfil


export default router;