// src/controllers/comment.controller.js
import Comment from '../comment/comment.model.js';

/**
 * Listar todos los comentarios de un post, ordenados por fecha descendente.
 * GET /api/posts/:postId/comments
 */
export const listCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment
      .find({ post: postId })
      .sort({ createdAt: -1 });
    return res.status(200).json(comments);
  } catch (err) {
    console.error('Error cargando comentarios:', err);
    return res
      .status(500)
      .json({ message: 'Error cargando comentarios', error: err.message });
  }
};

/**
 * Crear un nuevo comentario para un post.
 * POST /api/comments
 * Body: { author, content, postId }
 */
export const createComment = async (req, res) => {
  try {
    const { author, content, postId } = req.body;               // <-- extraer postId
    const comment = await Comment.create({
      author,
      content,
      post: postId                                            // <-- asignar a post
    });
    return res.status(201).json(comment);
  } catch (err) {
    console.error('Error creando comentario:', err);
    return res
      .status(500)
      .json({ message: 'Error creando comentario', error: err.message });
  }
};

/**
 * Eliminar un comentario existente por su ID.
 * DELETE /api/comments/:id
 */
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Comentario eliminado' });
  } catch (err) {
    console.error('Error eliminando comentario:', err);
    return res
      .status(500)
      .json({ message: 'Error eliminando comentario', error: err.message });
  }
};
