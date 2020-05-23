const { hashSync, compareSync } = require("bcryptjs");

const UserRepository = require("../repositories/userRepository");
const TokenService = require("./tokenService");

class UserService {
    constructor() {
        this.repository = new UserRepository();
        this.tokenService = new TokenService();
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async findUser(condition) {
        return await this.repository.findOne(condition);
    }

    async addUser(user) {
        const userWithHashPassword = user;
        userWithHashPassword.password = hashSync(user.password);

        return await this.repository.addUser(userWithHashPassword);
    }

    async checkUser(login, password) {
        const user = await this.repository.checkUser(login);

        if(!user) {
            return false;
        }

        const isPasswordMatch = compareSync(password, user.password);

        return isPasswordMatch ? this.tokenService.createToken(login) : false;
    }
}

module.exports = UserService;
