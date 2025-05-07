// src/validators/comment.validators.js
import { body, param } from 'express-validator';
import { postExists, commentExists } from '../helpers/db-validators.js';
import { validarCampos }  from './validate-fields.js';
import { handleErrors }   from './handle-errors.js';

export const createCommentValidator = [
  body('author').notEmpty().withMessage('El nombre es requerido'),
  body('content').notEmpty().withMessage('El comentario es requerido'),
  body('postId').isMongoId().withMessage('ID de publicación inválido').bail().custom(postExists),
  validarCampos,
  handleErrors
];

export const getCommentsValidator = [
  param('postId').isMongoId().withMessage('ID de publicación inválido').bail().custom(postExists),
  validarCampos,
  handleErrors
];

export const deleteCommentValidator = [
  param('id').isMongoId().withMessage('ID de comentario inválido').bail().custom(commentExists),
  validarCampos,
  handleErrors
];