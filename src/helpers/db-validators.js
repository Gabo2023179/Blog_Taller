import Post from '../post/post.model.js';
import Comment from '../comment/comment.model.js';

export const postExists = async (id = '') => {
  const exists = await Post.findById(id);
  if (!exists) throw new Error('No existe la publicación con el ID proporcionado');
  return true;
};

export const commentExists = async (id = '') => {
  const exists = await Comment.findById(id);
  if (!exists) throw new Error('No existe el comentario con el ID proporcionado');
  return true;
};