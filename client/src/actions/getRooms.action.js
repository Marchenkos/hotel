export const GET_ALL_ROOMS = "GET_ALL_ROOMS";

export const getAllRooms = rooms => {
    return {
        type: GET_ALL_ROOMS,
        rooms
    };
};
