// src/models/Post.js
import { Schema, model } from 'mongoose';

/**
 * Esquema de publicación del blog
 * Representa una entrada de aprendizaje creada por un usuario.
 */
const postSchema = new Schema(
  {
    /**
     * Título de la publicación.
     * Debe tener al menos 5 caracteres. Es obligatorio.
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * Contenido principal de la publicación.
     * Es obligatorio y debe tener al menos 10 caracteres.
     */
    content: {
      type: String,
      required: true,
    },

    /**
     * Curso asociado a la publicación.
     * Valores válidos: "Taller", "Práctica Supervisada", "Tecnología".
     */
    course: {
      type: String,
      required: true,
    },
  },
  {
    // Agrega automáticamente createdAt y updatedAt
    timestamps: true,
  }
);

// Exporta el modelo como "Post"
export default model('Post', postSchema);
