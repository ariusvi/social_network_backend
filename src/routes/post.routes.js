import { Router } from "express";
import { createPost, deletePostById } from "../controllers/post.controller.js";
import { auth } from "../middleware/auth.middleware.js";



const router = Router();
router.post('/', auth, createPost) //todo corregir que muestre el name no el id
router.delete('/:_id' , auth, deletePostById)
// router.put('/', updatePost) //todo update post por id
// router.get('/own', getOwnPost) //todo recuperar mis propios posts
// router.get('/', getPost) //todo recuperar todos los posts
// router.get('/:id', getPostById) //todo recuperar post por id
// router.get('/users/posts/:user-id', getPostByUserId) //todo recuperar posts de un usuario por su id



export default router;