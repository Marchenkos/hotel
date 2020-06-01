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

    
    async getBookedRooms(req, res, next) {
        const {
            roomId
        } = req.body;

        const result = await this.service.findBookedRoom(roomId);

        res.send(result);
    }

    async bookRoom(req, res, next) {
        const {
            room_id,
            email,
            ckeck_in,
            ckeck_out,
            cost,
        } = req.body;

        console.log(req.body);

        const room = await this.service.bookRoom({ room_id,
            email,
            ckeck_in,
            ckeck_out,
            cost
        });

        room === null ? next(new Error("Not found")) : res.send(room);
    }

    async getEstimation(req, res, next) {
        const {
            roomId,
            login,
        } = req.body;

        const estimation = await this.service.getEstimation(roomId, login);

        res.send(estimation);
    }

    async addEstimations(req, res, next) {
        const {
            roomId,
            estimation,
            login,
        } = req.body;

        const allEstimations = await this.service.addEstimations({
            room_id: roomId,
            estimation,
            user_login: login
        });

        res.send(allEstimations);
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
