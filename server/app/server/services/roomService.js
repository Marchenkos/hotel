const RoomRepository = require("../repositories/roomRepository");

class RoomService {
    constructor() {
        this.repository = new RoomRepository();
    }

    async findAll() {
        return await this.repository.find({});
    }

    async findSpecifyRoom(condition) {
        return await this.repository.findOne(condition);
    }

    async getEstimation(roomId, login) {
        return await this.repository.getEstimation({room_id: roomId, user_login: login});
    } 

    async addEstimations(estimation) {
        return await this.repository.addEstimations(estimation);
    }

    async findBookedRoom(condition) {
        return await this.repository.findBookedDate(condition);
    }

    async addRoom(newRoom) {
        return await this.repository.addRoom(newRoom);
    }

    async bookRoom(bookedRoom) {
        return await this.repository.bookRoom(bookedRoom);
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
