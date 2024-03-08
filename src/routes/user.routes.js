import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { getUserProfile } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";


const router = Router();

router.get('/', auth, getUsers) //todo faltaría crear el filtro que solo pueda recuperar el super_admin
router.get ('/profile', auth, getUserProfile) //todo perfil de usuario
// router.put('/profile', updateUsersProfile) //todo modificar datos del perfil


export default router;