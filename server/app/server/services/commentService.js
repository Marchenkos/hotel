const TokenService = require("./tokenService");
const CommentRepository = require("../repositories/commentRepository");

class CommentService {
    constructor() {
        this.repository = new CommentRepository();
        this.tokenService = new TokenService();
    }

    async addComment(commentData) {
        const {
            jwt,
            message,
            date
        } = commentData;

        const user_name = await this.tokenService.decodeToken(jwt);

        const newComment = {
            user_name: user_name.payload.id,
            message,
            date
        };

        console.log(newComment);

        return await this.repository.addComment(newComment);
    }

    async getComments(jwt) {
        const isUserExist = this.tokenService.varifyToken(jwt);

        if (isUserExist) {
            return await this.repository.getAll();
        }

        return null;
    }
}

module.exports = CommentService;
