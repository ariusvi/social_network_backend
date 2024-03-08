import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";


const router = Router();

router.get('/api/users', getUsers) //todo faltaría crear el filtro que solo pueda recuperar el super_admin


export default router;