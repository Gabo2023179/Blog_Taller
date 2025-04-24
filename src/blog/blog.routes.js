// src/routes/blog.routes.js
import { Router } from 'express';
import {listPosts,getPostById,createPost,updatePost,deletePost} from '../controllers/post.controller.js';
import {listCommentsByPost,createComment, deleteComment} from '../controllers/comment.controller.js';
import {createPostValidator,getPostValidator,updatePostValidator,deletePostValidator} from '../validators/post.validators.js';
import {getCommentsValidator,createCommentValidator,deleteCommentValidator} from '../validators/comment.validators.js';

const router = Router();

// Publicaciones
router.get('/posts',              listPosts);
router.get('/posts/:id',          getPostValidator,    getPostById);
router.post('/posts',             createPostValidator, createPost);
router.put('/posts/:id',          updatePostValidator, updatePost);
router.delete('/posts/:id',       deletePostValidator, deletePost);

// Comentarios (sin auth)
router.get('/posts/:postId/comments', getCommentsValidator, listCommentsByPost);
router.post('/comments',               createCommentValidator, createComment);
router.delete('/comments/:id',         deleteCommentValidator, deleteComment);

export default router;
