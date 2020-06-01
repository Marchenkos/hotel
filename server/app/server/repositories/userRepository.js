const User = require("../../db/models/user");

class UserRepository {
    async getAll() {
        const userList = await User.find({});

        return userList.length > 0 ? userList : null;
    }

    async findOne(currentLogin) {
        const user = await User.find({ login: currentLogin });

        return user;
    };

    async addUser(newUser) {
        try {
            const isUserExis = await this.findOne({ login: newUser.login });

            if(isUserExis) {
                return false;
            }

            return await User.create(newUser);
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
