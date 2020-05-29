export const SET_FILTER_ROOMS = "SET_FILTER_ROOMS";

export const setFilterRooms = rooms => {
    return {
        type: SET_FILTER_ROOMS,
        rooms
    };
};
