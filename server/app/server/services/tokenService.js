const jwt = require('jsonwebtoken');

const serverConfig =require("../../config/serverConfig");
const UserRepository = require("../repositories/userRepository");

class TokenService {
    constructor() {
        this.repository = new UserRepository();
    }

    async createToken(username) {
        return {
            token: jwt.sign({id: username}, serverConfig.secretKey),
        };
    }
}

module.exports = TokenService;
