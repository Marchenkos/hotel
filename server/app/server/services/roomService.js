const RoomRepository = require("../repositories/roomRepository");

class RoomService {
    constructor() {
        this.repository = new RoomRepository();
    }

    async findAll() {
        return await this.repository.find({});
    }

    async findSpecifyRoom(condition) {
        const findedRoom = await this.repository.findOne(condition);

        return findedRoom;
    }

    async addRoom(newRoom) {
        return await this.repository.addRoom(newRoom);
    }

    // async deleteRoomByName(name) {
    //     return await this.repository.removeRoom(name);
    // }

    // async updateRoom(deleteRoomByName, newValue) {
    //     delete newValue.currentUser;

    //     return await this.repository.updateRoom({ name }, newValue);
    // }
}

module.exports = RoomService;
