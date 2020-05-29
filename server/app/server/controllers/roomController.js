const RoomService = require("../services/roomService");

class RoomController{
    constructor() {
        this.service = new RoomService();
    }

    async getAll(req, res) {
        const allRooms = await this.service.findAll();

        allRooms.length == 0 ? res.send(null) : res.send(allRooms);
    }

    async getSpecifyRoom(req, res, next) {
        const roomId = req.params.roomId;

        const room = await this.service.findSpecifyRoom({ room_id: roomId });

        room === null ? next(new Error("Not found")) : res.send(room);
    }

    async addRoom(req, res, next) {
        const {
            status_id,
            room_id,
            small_description,
            description,
            cost,
            square,
            floor
        } = req.body;

        console.log(req.body);

        const result = await this.service.addRoom({
            status_id,
            room_id,
            small_description,
            description,
            cost,
            square,
            floor
        });

        result ? res.send(result) : next(new Error("Room is not added"));
    }

    // async deleteRoomByName(req, res, next) {
    //     if (res.statusCode == "422") return next(new Error("No correct data"));

    //     const RoomName = req.params.name;

    //     const removeRoom = await this.service.deleteRoomByName({ name: RoomName });

    //     removeRoom ? res.send(removeRoom) : next(new Error("Room is not removed"));
    // }

    // async updateRoom(req, res, next) {
    //     if (res.statusCode == "422") return next(new Error("No correct data"));

    //     const RoomName = req.params.name;
    //     const newValues = req.body;

    //     const Room = await this.service.updateRoom(RoomName, newValues);

    //     Room ? res.send(Room) : next(new Error("Room is not updated"));
    // }
}

module.exports = RoomController;
