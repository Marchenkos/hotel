export const SET_BOOK_ROOM = "SET_BOOK_ROOM";

export const setBookedRoom = rooms => {
    return {
        type: SET_BOOK_ROOM,
        rooms
    };
};
