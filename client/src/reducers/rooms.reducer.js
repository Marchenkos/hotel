import { SET_BOOK_ROOM } from "../actions/setBookedRoom";
import { GET_ALL_ROOMS } from "../actions/getRooms.action";

export const defaultState = {
    allRooms: [],
    bookedRooms: [],
};

export default function roomsReducer(state = defaultState, action) {
    switch (action.type) {
    case GET_ALL_ROOMS:
        return {
            ...state,
            allRooms: action.rooms
        };
    case SET_BOOK_ROOM:
        return {
            ...state,
            bookedRooms: action.rooms,
        };
    default:
        return state;
    }
}
