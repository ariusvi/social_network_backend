import { Router } from "express";
import { createPost, deletePostById, getOwnPost, getPost, getPostById, updatePost } from "../controllers/post.controller.js";
import { auth } from "../middleware/auth.middleware.js";



const router = Router();
router.post('/', auth, createPost) //todo corregir que muestre el name no el id
router.delete('/:_id' , auth, deletePostById)
router.put('/:_id', auth, updatePost) 
router.get('/own', auth, getOwnPost)
router.get('/', auth, getPost) 
router.get('/:_id', auth, getPostById) 
// router.get('/users/posts/:user-id', getPostByUserId) //todo recuperar posts de un usuario por su id



export default router;