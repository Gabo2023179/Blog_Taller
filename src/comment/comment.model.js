// src/models/Comment.js
import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

export default model('Comment', commentSchema);
