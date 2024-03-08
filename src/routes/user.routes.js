import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";


const router = Router();

router.get('/api/users', getUsers) //todo faltaría crear el filtro que solo pueda recuperar el super_admin
// router.get ('/api/users/profile' , userProfile) //todo
// router.put('/api/users/profile', updateUsersProfile) //todo


export default router;