const User = require("../../db/models/user");

class UserRepository {
    async getAll() {
        const userList = await User.find({});

        return userList.length > 0 ? userList : null;
    }

    async findOne(condition) {
        const user = await User.find(condition);

        return user.length > 0 ? user : null;
    };

    async addUser(newUser) {
        try {
            const user = await User.create(newUser);

            return {
                result: user
            };
        }
        catch(err) {
            return false;
        }
    }

    async checkUser(login) {
        try {
            return await User.findOne({ login });
        }
        catch(err) {
            return false;
        }
    }
}

module.exports = UserRepository;
