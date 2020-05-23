import { CHANGE_MENU } from "../actions/changeMenuActions";
import { CHANGE_USER } from "../actions/changeCurrentUser";
import { SET_BOOK_ROOM } from "../actions/setBookedRoom";

export const defaultState = {
    currentMenu: ["hotels", "rooms", "services", "reviews", "contacts", "gallery"],
    currentUser: null,
    jwt: null,
    bookedRooms: [],
};

export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
    case CHANGE_MENU:
        return {
            ...state,
            currentMenu: action.menu
        };
    case CHANGE_USER:
        return {
            ...state,
            currentUser: action.user,
            jwt: action.jwt
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
