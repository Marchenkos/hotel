import { SET_BOOK_ROOM } from "../actions/setBookedRoom";
import { GET_ALL_ROOMS } from "../actions/getRooms.action";
import { SET_FILTER_ROOMS } from "../actions/setFilterRooms.action";

export const defaultState = {
    allRooms: [],
    filterRooms: [],
    bookedRooms: [],
};

export default function roomsReducer(state = defaultState, action) {
    switch (action.type) {
    case GET_ALL_ROOMS:
        return {
            ...state,
            allRooms: action.rooms
        };
    case SET_FILTER_ROOMS:
        return {
            ...state,
            filterRooms: action.rooms
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
