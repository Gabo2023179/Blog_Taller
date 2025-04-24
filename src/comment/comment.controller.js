import Comment from '../comment/comment.model.js';

export const listCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).sort({
         createdAt: -1 
        });
    
    return res.status(200).json
    (comments);

  } catch (err) {
    return res.status(500).json({
        error: err.message 
    });
  }
};

export const createComment = async (req, res) => {
  try {
    const { author, content, postId } = req.body;

    const comment = await Comment.create({
      author,
      content,
      post: postId
    });

    return res.status(201).json(
        comment
    );

  } catch (err) {
    
    return res.status(500).json({ 
        error: err.message 
    });
  }
};

export const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);

    return res.status(200).json({ 
        message: 'Comentario eliminado' 
    });
  } catch (err) {

    return res.status(500).json({ 
        error: err.message 
    });
  }
};