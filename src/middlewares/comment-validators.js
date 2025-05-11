// src/validators/comment.validators.js
import { body, param } from 'express-validator';
import { postExists, commentExists } from '../helpers/db-validators.js';
import { validarCampos }  from './validate-fields.js';
import { handleErrors }   from './handle-errors.js';

export const createCommentValidator = [
  // 1) Validar :postId de la URL
  param('postId')
    .exists().withMessage('Falta parámetro postId')
    .bail()
    .isMongoId().withMessage('ID de publicación inválido')
    .bail()
    .custom(postExists),

  // 2) Validar campos obligatorios en el body
  body('author')
    .notEmpty().withMessage('El nombre es requerido'),

  body('content')
    .notEmpty().withMessage('El comentario es requerido'),

  // 3) Ejecutar validaciones
  validarCampos,
  handleErrors
];

export const getCommentsValidator = [
  param('postId')
    .isMongoId().withMessage('ID de publicación inválido')
    .bail()
    .custom(postExists),
  validarCampos,
  handleErrors
];



export const deleteCommentValidator = [
  param('id')
    .isMongoId().withMessage('ID de comentario inválido')
    .bail()
    .custom(commentExists),
  validarCampos,
  handleErrors
];

export const updateCommentValidator = [
  param('id')
    .isMongoId().withMessage('ID de comentario inválido')
    .bail()
    .custom(commentExists),
  body('author')
    .optional()
    .notEmpty().withMessage('El nombre es requerido'),
  body('content')
    .optional()
    .notEmpty().withMessage('El comentario es requerido'),
  validarCampos,
  handleErrors
];