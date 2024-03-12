import { Router } from "express";
import { createPost, deletePostById, getOwnPost, getPost, getPostById, likePost, updatePost } from "../controllers/post.controller.js";
import { auth } from "../middleware/auth.middleware.js";



const router = Router();
router.post('/', auth, createPost) //todo corregir que muestre el name no el id
router.delete('/:_id' , auth, deletePostById)
router.put('/:_id', auth, updatePost) 
router.get('/own', auth, getOwnPost)
router.get('/', auth, getPost) 
router.get('/:_id', auth, getPostById) 
router.put('/like/:_id', likePost) //todo dar y quitar like



export default router;