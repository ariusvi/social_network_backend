import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";


const router = Router();

router.get('/', getUsers) //todo faltaría crear el filtro que solo pueda recuperar el super_admin
// router.get ('/profile' , userProfile) //todo
// router.put('/profile', updateUsersProfile) //todo


export default router;