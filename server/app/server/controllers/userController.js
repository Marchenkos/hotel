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
        const {
            login
        } = req.body;

        const user = await this.service.findUser({ login: login });

        user ? res.send(user) : next(new Error("Not found"));
    }

    async addUser(req, res, next) {
        const newUserData = req.body;

        const newUser = await this.service.addUser(newUserData);

        res.send(newUser);
    }

    async checkUser(req, res, next) {
        const { login, password } = req.body;
        const isCompare = await this.service.checkUser(login, password);

        isCompare ? res.send({message: "Success",
        jwt: isCompare}) : res.send({message: "No correct login or password",
        jwt: false});
    }
}

module.exports = UserController;
