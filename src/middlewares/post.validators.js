import { body, param } from 'express-validator';
import { postExists } from '../helpers/db-validators.js';
import { validarCampos } from './validate-fields.js';
import { handleErrors } from './handle-errors.js';

// Valida creación de publicación
export const createPostValidator = [
  body('title')
    .notEmpty().withMessage('El título es obligatorio')
    .isLength({ min: 5 }).withMessage('El título debe tener al menos 5 caracteres'),
  body('content')
    .notEmpty().withMessage('La descripción es obligatoria')
    .isLength({ min: 10 }).withMessage('La descripción debe tener al menos 10 caracteres'),
  body('course')
    .notEmpty().withMessage('El curso es obligatorio')
    .isIn(['Taller','Práctica Supervisada','Tecnología'])
    .withMessage('Curso inválido'),
  validarCampos,
  handleErrors
];

// Valida obtener publicación por ID
export const getPostValidator = [
  param('id')
    .isMongoId().withMessage('ID de publicación inválido')
    .bail().custom(postExists),
  validarCampos,
  handleErrors
];

// Valida actualización de publicación
export const updatePostValidator = [
  param('id')
    .isMongoId().withMessage('ID de publicación inválido')
    .bail().custom(postExists),
  body('title')
    .optional()
    .isLength({ min: 5 }).withMessage('El título debe tener al menos 5 caracteres'),
  body('description')
    .optional()
    .isLength({ min: 10 }).withMessage('La descripción debe tener al menos 10 caracteres'),
  body('course')
    .optional()
    .isIn(['Taller','Práctica Supervisada','Tecnología'])
    .withMessage('Curso inválido'),
  validarCampos,
  handleErrors
];

// Valida eliminación de publicación
export const deletePostValidator = [
  param('id')
    .isMongoId().withMessage('ID de publicación inválido')
    .bail().custom(postExists),
  validarCampos,
  handleErrors
];
