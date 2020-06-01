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

    async varifyToken(token) {
        return jwt.verify(token, serverConfig.secretKey, function(err, decoded) {
            if (err) {
                return false;
            }

            return true;
        });
    }

    async decodeToken(token) {
        return jwt.decode(token, {complete: true});
    }
}

module.exports = TokenService;
