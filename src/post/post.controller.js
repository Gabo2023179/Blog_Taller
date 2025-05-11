// src/controllers/post.controller.js
import Post from '../post/post.model.js';

/**
 * Obtener todas las publicaciones ordenadas por fecha de creación (más recientes primero)
 * Método: GET
 * Ruta: /posts
 */
export const listPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, posts });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al listar publicaciones',
      error: err.message,
    });
  }
};

/**
 * Obtener una publicación específica por su ID
 * Método: GET
 * Ruta: /posts/:id
 */
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json({ success: true, post });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener la publicación',
      error: err.message,
    });
  }
};

/**
 * Crear una nueva publicación
 * Método: POST
 * Ruta: /posts
 * Body esperado: { title, content, course }
 */
export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).json({ success: true, post });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al crear la publicación',
      error: err.message,
    });
  }
};

/**
 * Actualizar una publicación existente por ID
 * Método: PUT
 * Ruta: /posts/:id
 * Body esperado: campos a actualizar (e.g. { title, content, course })
 */
export const updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ success: true, post: updated });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al actualizar la publicación',
      error: err.message,
    });
  }
};

/**
 * Eliminar una publicación por ID
 * Método: DELETE
 * Ruta: /posts/:id
 */
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: 'Publicación eliminada',
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar la publicación',
      error: err.message,
    });
  }
};
