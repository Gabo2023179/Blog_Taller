// src/routes/blog.routes.js
import { Router } from 'express';
import {listPosts,getPostById,createPost,updatePost,deletePost} from '../post/post.controller.js';
import {listCommentsByPost,createComment, deleteComment} from '../comment/comment.controller.js';
import {createPostValidator,getPostValidator,updatePostValidator,deletePostValidator} from '../middlewares/post.validators.js';
import {getCommentsValidator,createCommentValidator,deleteCommentValidator} from '../middlewares/comment-validators.js';

const router = Router();

// Publicaciones
router.get('/',              listPosts);
router.get('/posts/:id',          getPostValidator,    getPostById);
router.post('/posts',             createPostValidator, createPost);
router.put('/posts/:id',          updatePostValidator, updatePost);
router.delete('/posts/:id',       deletePostValidator, deletePost);

// Comentarios (sin auth)
router.get('/posts/:postId/comments', getCommentsValidator, listCommentsByPost);
router.post('/comments',               createCommentValidator, createComment);
router.delete('/comments/:id',         deleteCommentValidator, deleteComment);

export default router;