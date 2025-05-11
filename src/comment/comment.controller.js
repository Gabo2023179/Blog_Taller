// src/controllers/comment.controller.js
import Comment from '../comment/comment.model.js';

/**
 * Listar todos los comentarios de un post, ordenados por fecha descendente.
 * GET /api/posts/:postId/comments
 */
export const listCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({
       post: postId 
      }).sort({
         createdAt: -1 
        });

    return res.status(200).json(comments);

  } catch (err) {
    console.error('Error cargando comentarios:', err);
    return res.status(500).json({
      message: 'Error cargando comentarios',
      error: err.message 
    });
  }
};

/**
 * Crear un nuevo comentario para un post.
 * POST /api/comments
 * Body: { author, content, postId }
 */
export const createComment = async (req, res) => {
  try {
    const { author, content } = req.body;  

    const { postId } = req.params;  

    const comment = await Comment.create({
      author,
      content,
      post: postId                                            
    });

    return res.status(201).json(comment);

  } catch (err) {
    console.error('Error creando comentario:', err);
    return res.status(500).json({ 
      message: 'Error creando comentario', 
      error: err.message 
    });
  }
};

/**
 * Eliminar un comentario existente por su ID.
 * DELETE /api/comments/:id
 */
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    
    const deleted = await Comment.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Comentario no encontrado'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Comentario eliminado'
    });

  } catch (err) {
    console.error('Error eliminando comentario:', err);

    return res.status(500).json({
      success: false,
      message: 'Error eliminando comentario',
      error: err.message
    });
  }
};

/**
 * PUT /Blog/v1/comments/:id
 */
export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;

    const { author, content } = req.body;

    const updated = await Comment.findByIdAndUpdate(
      id,
      { author, content },
      { new: true }
    );

    return res.status(200).json({ success: true, comment: updated });
    
  } catch (err) {
    console.error('Error actualizando comentario:', err);
    return res.status(500).json({
      success: false,
      message: 'Error actualizando comentario',
      error: err.message
    });
  }
};


