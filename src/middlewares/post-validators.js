import { body, param } from 'express-validator';
import { postExists }      from './helpers/db-validators.js';
import { validarCampos }   from './validate-fields.js';
import { handleErrors }    from './handle-errors.js';

export const createPostValidator = [
  body('title').notEmpty().withMessage('El título es requerido'),
  body('content').notEmpty().withMessage('El contenido es requerido'),
  body('course').notEmpty().withMessage('El curso es requerido'),
  validarCampos,
  handleErrors
];

export const getPostValidator = [
  param('id').isMongoId().withMessage('ID inválido').bail().custom(postExists),
  validarCampos,
  handleErrors
];

export const updatePostValidator = [
  ...getPostValidator,
  body('title').optional().notEmpty().withMessage('El título no puede estar vacío'),
  body('content').optional().notEmpty().withMessage('El contenido no puede estar vacío'),
  validarCampos,
  handleErrors
];

export const deletePostValidator = getPostValidator;