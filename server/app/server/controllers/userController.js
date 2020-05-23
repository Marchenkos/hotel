const UserService = require("../services/userService");

class UserController{
    constructor() {
        this.service = new UserService();
    }

    async getAll(req, res) {
        const userList = await this.service.getAll();

        userList.length == 0 ? res.send(null) : res.send(userList);
    }

    async findUser(req, res, next) {
        const userName = req.params.name;

        const user = await this.service.findUser({ login: userName });

        user ? res.send(user) : next(new Error("Not found"));
    }

    async addUser(req, res, next) {
        const newUserData = req.body;

        const newUser = await this.service.addUser(newUserData);

        newUser ? res.send(newUser) : next(new Error("Registration was falled out"));
    }

    async checkUser(req, res, next) {
        const { login, password } = req.body;

        console.log(password, login);

        const isCompare = await this.service.checkUser(login, password);

        isCompare ? res.send({message: "Success",
        jwt: isCompare}) : next(new Error("No correct login or password"));
    }
}

module.exports = UserController;
