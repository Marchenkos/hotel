const Comment = require("../../db/models/comment");

class CommentRepository {
    async getAll() {
        const commentsList = await Comment.find({});

        return commentsList.length > 0 ? commentsList : null;
    }

    async addComment(comment) {
        try {
            return await Comment.create(comment);
        }
        catch(err) {
            return false;
        }
    }
}

module.exports = CommentRepository;
