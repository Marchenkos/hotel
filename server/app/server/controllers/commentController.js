const CommentService = require("../services/commentService");

class CommentController{
    constructor() {
        this.service = new CommentService();
    }

    async getComments(req, res, next) {
        const { jwt } = req.body;
        const commenstList = await this.service.getComments(jwt);

        res.send(commenstList);
    }

    async saveComments(req, res, next) {
        const newComment = req.body;
        const result = await this.service.addComment(newComment);

        console.log(result);
        res.send(result);
    }
}

module.exports = CommentController;
