import Course from './course/course.model.js';
import Post from './post/post.model.js';

export const postExists = async (id) => {
  const exists = await Post.findById(id);
  if (!exists) {
    throw new Error(`La publicación con id ${id} no existe`);
  }
};

export const courseExists = async (id) => {
  const exists = await Course.findById(id);
  if (!exists) {
    throw new Error(`El curso con id ${id} no existe`);
  }
};

export const courseNameExists = async (name) => {
  const exists = await Course.findOne({ name });
  if (exists) {
    throw new Error(`Ya existe un curso con el nombre '${name}'`);
  }
};