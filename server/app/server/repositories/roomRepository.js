const Room = require("../../db/models/rooms");

class RoomRepository {
    // async isRoomExist(property) {
    //     const RoomList = await Room.find(property);
    
    //     return RoomList.length > 0 ? true : false;
    // }

    async find(condition) {
        const findedRoom = await Room.find(condition);

        return findedRoom.length > 0 ? findedRoom : null;
    }

    async findOne(condition) {
        const result = await Room.findOne(condition, (err, room) => {
            if (err) {
                return null;
            }

            return room;
        });

        return result;
    }

    async addRoom(newRoom) {
        try {
            const result = await Room.create(newRoom);
            console.log(result);
     
            return result;
        }
        catch(err) {
            return false;
        }
    }

    async removeRoom(condition) {
        try {
            return await Room.findOneAndDelete(condition);
        }
        catch(err) {
            return false;
        }
    }

    async updateRoom(name, newParameters) {
        try {
            return await Room.findOneAndUpdate(name, {$set: newParameters});
        }
        catch(err) {
            return false;
        }
    }
}

module.exports = RoomRepository;
